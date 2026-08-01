
class Enumeration {
  constructor(ctx, idl) {
    this.ctx = ctx;
    this.idl = idl;
    this.name = idl.name;
    this.str = null;
  }

  generate() {
    const values = new Set(this.idl.values.map((val) => val.value));
    if (values.size !== this.idl.values.length) {
      throw new Error(`Duplicates found in ${this.name}'s enumeration values`);
    }
    const expectedValues = [...values]
      .map((value) => JSON.stringify(value))
      .join(", ")
      .replace(/[\\`$]/gu, "\\$&");

    this.str += `
      const enumerationValues = new Set(${JSON.stringify([...values])});

      const convert = (globalObject, value, { context = "The provided value" } = {}) => {
        const string = \`\${value}\`;
        if (!enumerationValues.has(string)) {
          throw new globalObject.TypeError(
            \`\${context} must be one of: ${expectedValues}. Received: \${JSON.stringify(string)}.\`
          );
        }
        return string;
      };

      export default { convert, enumerationValues }
    `;
  }

  toString() {
    this.str = "";
    this.generate();
    return this.str;
  }
}

export default Enumeration;
