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

function formatPascalCaseId(name : string) : string {
  return camelize(underscore(name), true);
}

function formatCamelCaseId(name : string) : string {
  return camelize(underscore(name), false);
}

function formatSnakeCaseId(name : string) : string {
  return underscore(name);
}

function formatKebabCaseId(name : string) : string {
  return parameterize(underscore(name).replaceAll("_", " "), { preserveCase: false });
}

enum Convention {
  PascalCase,
  KebabCase
}

const PascalCaseFormat = {
  toId: formatPascalCaseId
}

const KebabCaseFormat = {
  toId: formatKebabCaseId
}

function provideFormat(flag : Convention = Convention.KebabCase) {
  switch(flag) {
    case Convention.PascalCase: return PascalCaseFormat;
    case Convention.KebabCase: return KebabCaseFormat;
  }
}

export {
  Convention,
  provideFormat,
  formatId,
  formatClassName,
  formatMethodName,
  formatPascalCaseId,
  formatCamelCaseId,
  formatSnakeCaseId,
  formatKebabCaseId
}