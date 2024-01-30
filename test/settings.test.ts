import { test, expect } from "vitest";
import Settings from "../src/settings";

test("settings version", t => {
  const settings = new Settings();
  expect(settings.version, "0.0.0");
});
