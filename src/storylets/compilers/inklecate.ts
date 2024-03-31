import "./inklecate.d";
import ink from "inklecate";
import { LocalFileSource, InkJsonBytecode } from "../compiler";

class InklecateCompiler {
  async compile(source : LocalFileSource) : Promise<InkJsonBytecode> {
    const inputFilepath = source.path();
    const result = await ink.inklecate({ inputFilepath });
    if (result.compilerOutput.length > 1) {
      console.log(`script: ${inputFilepath}`);
      console.error(result.compilerOutput);
    }
    return Promise.resolve(JSON.stringify(result.storyContent));
  }
}

export default InklecateCompiler;
