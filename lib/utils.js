
import keywords from "./keywords.js";

function getDefault(dflt) {
  switch (dflt.type) {
    case "boolean":
    case "string":
      return JSON.stringify(dflt.value);
    case "number":
      return dflt.value;
    case "null":
    case "NaN":
      return dflt.type;
    case "Infinity":
      return `${dflt.negative ? "-" : ""}Infinity`;
    case "sequence":
      return "[]";
  }
  throw new Error(`Unexpected default type: ${dflt.type}`);
}

function getExtAttr(attrs, name) {
  for (let i = 0; i < attrs.length; ++i) {
    if (attrs[i].name === name) {
      return attrs[i];
    }
  }

  return null;
}

function isGlobal(idl) {
  return Boolean(getExtAttr(idl.extAttrs, "Global"));
}

function hasCEReactions(idl) {
  return Boolean(getExtAttr(idl.extAttrs, "CEReactions"));
}

function isOnInstance(memberIDL, interfaceIDL) {
  return memberIDL.special !== "static" && isGlobal(interfaceIDL);
}

function symbolName(symbol) {
  const desc = String(symbol).replace(/^Symbol\((.*)\)$/, "$1");
  if (!desc.startsWith("Symbol.")) {
    throw new Error(`Internal error: Unsupported property name ${String(symbol)}`);
  }
  return desc;
}

function propertyName(name) {
  // All Web IDL identifiers are valid JavaScript PropertyNames, other than those with '-'.
  const isJSIdentifier = !name.includes("-");
  if (isJSIdentifier) {
    return name;
  }
  return JSON.stringify(name);
}

function stringifyPropertyKey(prop) {
  return typeof prop === "symbol" ? `[${symbolName(prop)}]` : propertyName(prop);
}

function stringifyPropertyName(prop) {
  return typeof prop === "symbol" ? symbolName(prop) : JSON.stringify(propertyName(prop));
}

// type can be "accessor" or "regular"
function getPropertyDescriptorModifier(currentDesc, targetDesc, type, value = undefined) {
  const changes = [];
  if (value !== undefined) {
    changes.push(`value: ${value}`);
  }
  if (currentDesc.configurable !== targetDesc.configurable) {
    changes.push(`configurable: ${targetDesc.configurable}`);
  }
  if (currentDesc.enumerable !== targetDesc.enumerable) {
    changes.push(`enumerable: ${targetDesc.enumerable}`);
  }
  if (type !== "accessor" && currentDesc.writable !== targetDesc.writable) {
    changes.push(`writable: ${targetDesc.writable}`);
  }

  if (changes.length === 0) {
    return undefined;
  }
  return `{ ${changes.join(", ")} }`;
}

const defaultDefinePropertyDescriptor = {
  configurable: false,
  enumerable: false,
  writable: false
};

function formatArgs(args) {
  return args
    .filter(name => name !== null && name !== undefined && name !== "")
    .map(name => name + (keywords.has(name) ? "_" : ""))
    .join(", ");
}

function toKey(name) {
  return String(name).replace(/[./-]+/g, " ").trim().replace(/ /g, "_");
}

class RequiresMap {
  constructor(ctx) {
    this.ctx = ctx;
    this.declarations = new Map();
    this.imports = new Map();
  }

  add(specifier, identifier = toKey(specifier)) {
    if (specifier.startsWith(".") && !specifier.endsWith(".js")) {
      specifier = `${specifier}.js`;
    }

    const value = this.imports.get(identifier);
    if (value && value !== specifier) {
      throw new Error(`Internal error: Import name clash: ${identifier}; was ${value}, adding: ${specifier}`);
    }

    this.imports.set(identifier, specifier);
    return identifier;
  }

  addRelative(value) {
    return this.add(`./${value}`);
  }

  addDeclaration(key, expr) {
    const value = this.declarations.get(key);
    if (value && value !== expr) {
      throw new Error(`Internal error: Variable name clash: ${key}; was ${value}, adding: ${expr}`);
    }
    return this.declarations.set(key, expr);
  }

  merge(src) {
    if (!src || !(src instanceof RequiresMap)) {
      return;
    }
    for (const [key, val] of src.declarations) {
      this.addDeclaration(key, val);
    }
    for (const [key, val] of src.imports) {
      this.add(val, key);
    }
  }

  generate() {
    return `
      ${[...this.imports].map(([key, value]) => `import ${key} from "${value}";`).join("\n")}

      ${[...this.declarations].map(([key, value]) => `const ${key} = ${value};`).join("\n")}
    `;
  }
}

export {
  getDefault,
  getExtAttr,
  isGlobal,
  hasCEReactions,
  isOnInstance,
  stringifyPropertyKey,
  stringifyPropertyName,
  getPropertyDescriptorModifier,
  defaultDefinePropertyDescriptor,
  formatArgs,
  RequiresMap
};
