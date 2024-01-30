import { ObjectGenerator, LocalFileSource, JsonResult } from "../generator";

class StageCompiler implements ObjectGenerator {
  async compile(source : LocalFileSource) : JsonResult {
    return Promise.resolve("{}");
  }
}

export default StageCompiler;
