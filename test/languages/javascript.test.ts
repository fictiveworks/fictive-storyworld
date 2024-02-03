import { describe, it, expect } from "vitest";
import { JavascriptCodeUnit } from "../../src/languages/javascript";

describe("JavascriptCodeUnit", d => {
  it("supports base accessor API", t => {
    const js = JavascriptCodeUnit.create("click-button", ["const oneTimeClick = false;"]);
    expect(js.name, "click-button");
    expect(js.id, "click-button");
    expect(js.methodName, "clickButton");
    expect(js.className, "ClickButton");
  });

  // it("construct with config", t => {
  //   const js = new JavascriptCodeUnit("clickButton", ["const oneTimeClick = false;"]);
  //   expect(js.methonamedName, "clickButton");
  //   expect(js.className, "ClickButton");
  // });
});

