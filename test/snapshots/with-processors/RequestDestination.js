export const enumerationValues = new Set([
  "",
  "audio",
  "document",
  "embed",
  "font",
  "image",
  "manifest",
  "object",
  "report",
  "script",
  "sharedworker",
  "style",
  "track",
  "video",
  "worker",
  "xslt"
]);

export const convert = (globalObject, value, { context = "The provided value" } = {}) => {
  const string = `${value}`;
  if (!enumerationValues.has(string)) {
    throw new globalObject.TypeError(`${context} '${string}' is not a valid enumeration value for RequestDestination`);
  }
  return string;
};

export default { convert, enumerationValues };
