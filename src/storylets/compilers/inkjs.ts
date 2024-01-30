import { Story, Compiler } from "inkjs";
import { InkJsonBytecode } from "../compiler";

type InkStory = InstanceType<typeof Story>;
type InkCompiler = InstanceType<typeof Compiler>;

class InkjsCompiler {
  compileSync(source : string) : InkJsonBytecode {
    const compiler : InkCompiler = new Compiler(source);
    const story : InkStory = compiler.Compile();
    return story.ToJson() || "{}";
  }

  async compile(source : string) : Promise<InkJsonBytecode> {
    return Promise.resolve(this.compileSync(source));
  }
}

export default InkjsCompiler;
