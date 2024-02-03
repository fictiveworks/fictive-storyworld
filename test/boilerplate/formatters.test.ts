import { describe, it, expect } from "vitest";
import { formatId, formatClassName, formatMethodName } from "../../src/boilerplate/formatters";

describe("formatId", d => {
  it("formats single-part name", t => {
    expect(formatId("bystander")).toEqual("bystander");
  });

  it("formats multi-part names", t => {
    expect(formatId("wandering-trader")).toEqual("wandering-trader");
    expect(formatId("WanderingTrader")).toEqual("wandering-trader");
    expect(formatId("Wandering_Trader")).toEqual("wandering-trader");
    expect(formatId("WANDERING_TRADER")).toEqual("wandering-trader");
  });
});

describe("formatClassName", d => {
  it("formats single-part name", t => {
    expect(formatClassName("bystander")).toEqual("Bystander");
  });

  it("rewrites multi-part names", t => {
    expect(formatClassName("wandering-trader")).toEqual("WanderingTrader");
    expect(formatClassName("WanderingTrader")).toEqual("WanderingTrader");
    expect(formatClassName("Wandering_Trader")).toEqual("WanderingTrader");
    expect(formatClassName("WANDERING_TRADER")).toEqual("WanderingTrader");
  });
});

describe("formatMethodName", d => {
  it("rewrites single-part name", t => {
    expect(formatMethodName("bystander")).toEqual("bystander");
  });

  it("rewrites multi-part names", t => {
    expect(formatMethodName("wandering-trader")).toEqual("wanderingTrader");
    expect(formatMethodName("WanderingTrader")).toEqual("wanderingTrader");
    expect(formatMethodName("Wandering_Trader")).toEqual("wanderingTrader");
    expect(formatMethodName("WANDERING_TRADER")).toEqual("wanderingTrader");
  });
});
