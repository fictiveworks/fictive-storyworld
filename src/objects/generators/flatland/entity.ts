import { ObjectGenerator, LocalFileSource, JsonResult } from "../../generator";

class EntityCompiler implements ObjectGenerator {
  async compile(source : LocalFileSource) : JsonResult {
    return Promise.resolve("{}");
  }
}

export default EntityCompiler;
