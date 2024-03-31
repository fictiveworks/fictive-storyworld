import { ObjectGenerator, LocalFileSource, JsonResult } from "../../generator";

class ItemCompiler implements ObjectGenerator {
  async compile(source : LocalFileSource) : JsonResult {
    return Promise.resolve("{}");
  }
}

export default ItemCompiler;
