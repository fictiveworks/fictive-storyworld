import { ObjectGenerator, LocalFileSource, JsonResult } from "../../generator";

class StoryletCompiler implements ObjectGenerator {
  async compile(source : LocalFileSource) : JsonResult {
    return Promise.resolve("{}");
  }
}

export default StoryletCompiler;
