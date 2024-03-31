import Ink from "@shepard4711/inkjs";
import { InkJsonBytecode } from "../compiler";

type InkStory = InstanceType<typeof Ink.Story>;
type InkCompiler = InstanceType<typeof Ink.Compiler>;

class InkjsCompiler {
  compileSync(source : string) : InkJsonBytecode {
    const compiler : InkCompiler = new Ink.Compiler(source);
    const story : InkStory = compiler.Compile();
    return story.ToJson() || "{}";
  }

  async compile(source : string) : Promise<InkJsonBytecode> {
    return Promise.resolve(this.compileSync(source));
  }
}

export default InkjsCompiler;
