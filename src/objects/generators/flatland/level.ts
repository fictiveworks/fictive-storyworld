import { ObjectGenerator, LocalFileSource, JsonResult } from "../../generator";

class LevelCompiler implements ObjectGenerator {
  async compile(source : LocalFileSource) : JsonResult {
    return Promise.resolve("{}");
  }
}

export default LevelCompiler;
