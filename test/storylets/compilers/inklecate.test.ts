import { test, expect } from "vitest";
import InklecateCompiler from "../../../src/storylets/compilers/inklecate.ts";

class FakeSource {
  path() : string {
    return `${__dirname}/hello.ink`;
  }
  contents() : string {
    return "";
  }
}

test("inklecate", async t => {
  const compiler = new InklecateCompiler();
  const result = await compiler.compile(new FakeSource());
  expect(result).toMatch(/"root":\[\["\^Hello world from Ink\.",/)
});
