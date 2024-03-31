import { ObjectGenerator, LocalFileSource, JsonResult } from "../../generator";

class TileCompiler implements ObjectGenerator {
  async compile(source : LocalFileSource) : JsonResult {
    return Promise.resolve("{}");
  }
}

export default TileCompiler;
