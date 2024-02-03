export type StaticSubtype<T> = { new(name : string, body : string[]) : T };

class CodeUnit {
  readonly name : string;
  readonly body : string[];

  static create<T extends CodeUnit>(this : StaticSubtype<T>, name : string, body : string[]) {
    return new this(name, body);
  }

  constructor(name : string, body : string[]) {
    this.name = name;
    this.body = body;
  }

  writeIndent(level : number) : string {
    const l = level; // affordance for nesting later
    return Array(l).map(i => "  ").join("");
  }
}

export default CodeUnit;