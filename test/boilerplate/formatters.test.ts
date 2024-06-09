import { describe, it, expect } from "vitest";
import { formatId,
         Convention,
         provideFormat,
         formatClassName,
         formatMethodName,
         formatCamelCaseId,
         formatPascalCaseId,
         formatSnakeCaseId,
         formatKebabCaseId
        } from "../../src/boilerplate/formatters";

describe("provideFormatters", d => {
  describe("default convention", s => {
    const format = provideFormat();

    it("rewrites single-part name", t => {
      expect(format.toId("bystander")).toEqual("bystander");
    });

    it("rewrites multi-part names", t => {
      expect(format.toId("wandering-trader")).toEqual("wandering-trader");
      expect(format.toId("WanderingTrader")).toEqual("wandering-trader");
      expect(format.toId("Wandering_Trader")).toEqual("wandering-trader");
      expect(format.toId("WANDERING_TRADER")).toEqual("wandering-trader");
    });
  });

  describe("PascalCase convention", s => {
    const format = provideFormat(Convention.PascalCase);

    it("rewrites single-part name", t => {
      expect(format.toId("bystander")).toEqual("Bystander");
    });

    it("rewrites multi-part names", t => {
      expect(format.toId("wandering-trader")).toEqual("WanderingTrader");
      expect(format.toId("WanderingTrader")).toEqual("WanderingTrader");
      expect(format.toId("Wandering_Trader")).toEqual("WanderingTrader");
      expect(format.toId("WANDERING_TRADER")).toEqual("WanderingTrader");
    });
  });

  describe("kebab-case convention", s => {
    const format = provideFormat(Convention.KebabCase);

    it("rewrites single-part name", t => {
      expect(format.toId("bystander")).toEqual("bystander");
    });

    it("rewrites multi-part names", t => {
      expect(format.toId("wandering-trader")).toEqual("wandering-trader");
      expect(format.toId("WanderingTrader")).toEqual("wandering-trader");
      expect(format.toId("Wandering_Trader")).toEqual("wandering-trader");
      expect(format.toId("WANDERING_TRADER")).toEqual("wandering-trader");
    });
  });
});

describe("formatCamelCaseId", d => {
  it("rewrites single-part name", t => {
    expect(formatCamelCaseId("bystander")).toEqual("bystander");
  });

  it("rewrites multi-part names", t => {
    expect(formatCamelCaseId("wandering-trader")).toEqual("wanderingTrader");
    expect(formatCamelCaseId("WanderingTrader")).toEqual("wanderingTrader");
    expect(formatCamelCaseId("Wandering_Trader")).toEqual("wanderingTrader");
    expect(formatCamelCaseId("WANDERING_TRADER")).toEqual("wanderingTrader");
  });
});

describe("formatPascalCaseId", d => {
  it("rewrites single-part name", t => {
    expect(formatPascalCaseId("bystander")).toEqual("Bystander");
  });

  it("rewrites multi-part names", t => {
    expect(formatPascalCaseId("wandering-trader")).toEqual("WanderingTrader");
    expect(formatPascalCaseId("WanderingTrader")).toEqual("WanderingTrader");
    expect(formatPascalCaseId("Wandering_Trader")).toEqual("WanderingTrader");
    expect(formatPascalCaseId("WANDERING_TRADER")).toEqual("WanderingTrader");
  });
});

describe("formatSnakeCaseId", d => {
  it("rewrites single-part name", t => {
    expect(formatSnakeCaseId("bystander")).toEqual("bystander");
  });

  it("rewrites multi-part names", t => {
    expect(formatSnakeCaseId("wandering-trader")).toEqual("wandering_trader");
    expect(formatSnakeCaseId("WanderingTrader")).toEqual("wandering_trader");
    expect(formatSnakeCaseId("Wandering_Trader")).toEqual("wandering_trader");
    expect(formatSnakeCaseId("WANDERING_TRADER")).toEqual("wandering_trader");
  });
});

describe("formatKebabCaseId", d => {
  it("rewrites single-part name", t => {
    expect(formatKebabCaseId("bystander")).toEqual("bystander");
  });

  it("rewrites multi-part names", t => {
    expect(formatKebabCaseId("wandering-trader")).toEqual("wandering-trader");
    expect(formatKebabCaseId("WanderingTrader")).toEqual("wandering-trader");
    expect(formatKebabCaseId("Wandering_Trader")).toEqual("wandering-trader");
    expect(formatKebabCaseId("WANDERING_TRADER")).toEqual("wandering-trader");
  });
});

describe("formatClassName", d => {
  it("rewrites single-part name", t => {
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
