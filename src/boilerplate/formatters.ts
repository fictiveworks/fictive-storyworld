import { parameterize, camelize, underscore } from "inflected";

function formatId(name : string) : string {
  return parameterize(underscore(name).replaceAll("_", " "), { preserveCase: false });
}

function formatClassName(name : string) : string {
  return camelize(underscore(name), true);
}

function formatMethodName(name : string) : string {
  return camelize(underscore(name), false);
}

export {
  formatId,
  formatClassName,
  formatMethodName
}