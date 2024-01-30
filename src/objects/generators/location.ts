import { ObjectGenerator, LocalFileSource, JsonResult } from "../generator";

class LocationCompiler implements ObjectGenerator {
  async compile(source : LocalFileSource) : JsonResult {
    return Promise.resolve("{}");
  }
}

export default LocationCompiler;
