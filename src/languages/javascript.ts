import { formatId, formatClassName, formatMethodName } from "../boilerplate/formatters";
import CodeUnit from "../boilerplate/code-unit";

class JavascriptCodeUnit extends CodeUnit {
  get id() {
    return formatId(this.name);
  }

  get className() {
    return formatClassName(this.name);
  }

  get methodName() {
    return formatMethodName(this.name);
  }
}

class JavascriptStaticMethod extends JavascriptCodeUnit {
  writeDeclaration() : string {
    return `${this.writeIndent(1)}static ${this.methodName}() {`;
  }

  writeBody(body) : any {
    return body;
  }

  writeScopeEnd() : string {
    return `${this.writeIndent(1)}}`;
  }
}

class JavascriptNewInstance {

}

class JavascriptModule extends JavascriptCodeUnit {
  writeConstructor() {

  }

  writeBuilder() {

  }

  writeStaticMethod(name : string, body : JavascriptNewInstance) {
    const method = new JavascriptStaticMethod("boat", []);
    method.writeDeclaration();
    method.writeBody(body);
    method.writeScopeEnd();
  }
}

export {
  JavascriptCodeUnit
}