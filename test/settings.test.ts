import { test, expect } from "vitest";
import Settings from "../src/settings";

test("worldDir", t => {
  const settings = new Settings(process.cwd() + "/demo");
  expect(settings.worldDir).toMatch(/demo$/);
});

test("worldFile internal default", t => {
  const settings = new Settings(process.cwd() + "/demo");
  expect(settings.worldFile).toMatch("world.json");
});

test("worldFile set by user", t => {
  const settings = new Settings(process.cwd() + "/demo", "manifest.json");
  expect(settings.worldFile).toMatch("manifest.json");
});
