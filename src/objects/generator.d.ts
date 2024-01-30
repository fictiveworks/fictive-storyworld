export type PathString = string;
export type SourceString = string;

export interface LocalFileSource {
  path() : PathString;
  contents() : SourceString;
}

export type JsonResult = Promise<Readonly<string>>;

export interface ObjectGenerator {
  compile(source : LocalFileSource) : JsonResult;
}
