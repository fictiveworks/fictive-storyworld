import { test, expect } from "vitest";
import InkjsCompiler from "../../../src/storylets/compilers/inkjs.ts";

const inkScript = `
Hello world from Ink.

-> DONE
`;

test("inkjs", async t => {
  const compiler = new InkjsCompiler();
  const result = await compiler.compile(inkScript);
  expect(result).toMatch(/"root":\[\["\^Hello world from Ink\.",/)
});
