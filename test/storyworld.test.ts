import { describe, test, expect } from "vitest";
import Settings from "../src/settings";
import { readDefinition, collect, Bundle } from "../src/storyworld";

describe("readDefinition", d => {
  test("throws error when world file is missing", t => {
    const settings = new Settings(process.cwd() + "/src");
    expect(() => readDefinition(settings)).toThrowError(/does not exist/);
  });

  test("throws error when world file is invalid", t => {
    const settings = new Settings(process.cwd(), "README.md");
    expect(() => readDefinition(settings)).toThrowError(/is not valid JSON/);
  });

  test("read demo world file", t => {
    const settings = new Settings(process.cwd() + "/demo");
    const worldDefinition = readDefinition(settings);
    expect(worldDefinition.levels).toContain("overworld");
    expect(worldDefinition.levels).toContain("caverns");
    expect(worldDefinition.levels).toContain("underworld");
  });
});

describe("collect", d => {
  test("", async t => {
    const settings = new Settings(process.cwd() + "/demo");
    const worldDefinition = readDefinition(settings);
    const bundle : Bundle = await collect(worldDefinition, settings);
    expect(bundle.levels).toContain("overworld");
  });
});