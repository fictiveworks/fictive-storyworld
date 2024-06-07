import { describe, it, expect } from "vitest";
import { CharRaster, IntRaster, HexRaster } from "../../src/tiles/raster";

describe("CharRaster", d => {
  const map = new CharRaster(3, 3, "%");
  map.write(0, 0, "$");
  map.write(1, 1, "!");
  map.write(2, 2, "#");

  it("reads default values", t => {
    expect(map.read(0, 1), "%");
    expect(map.read(0, 2), "%");
    expect(map.read(1, 0), "%");
    expect(map.read(1, 2), "%");
    expect(map.read(2, 0), "%");
    expect(map.read(2, 1), "%");
  });

  it("reads manually set values", t => {
    expect(map.read(0, 0), "$");
    expect(map.read(1, 1), "!");
    expect(map.read(2, 2), "#");
  });
});

describe("IntRaster", d => {
  const map = new IntRaster(3, 3, 0);
  map.write(0, 0, 1);
  map.write(1, 1, 2);
  map.write(2, 2, 3);

  it("reads default values", t => {
    expect(map.read(0, 1)).toBe(0);
    expect(map.read(0, 2)).toBe(0);
    expect(map.read(1, 0)).toBe(0);
    expect(map.read(1, 2)).toBe(0);
    expect(map.read(2, 0)).toBe(0);
    expect(map.read(2, 1)).toBe(0);
  });

  it("reads manually set values", t => {
    expect(map.read(0, 0)).toBe(1);
    expect(map.read(1, 1)).toBe(2);
    expect(map.read(2, 2)).toBe(3);
  });
});

describe("HexRaster", d => {
  const map = new HexRaster(3, 3, "#000000");
  map.write(0, 0, "#ff0000");
  map.write(1, 1, "#00ff00");
  map.write(2, 2, "#0000ff");

  it("reads default values", t => {
    expect(map.read(0, 1)).toBe("#000000");
    expect(map.read(0, 2)).toBe("#000000");
    expect(map.read(1, 0)).toBe("#000000");
    expect(map.read(1, 2)).toBe("#000000");
    expect(map.read(2, 0)).toBe("#000000");
    expect(map.read(2, 1)).toBe("#000000");
  });

  it("reads manually set values", t => {
    expect(map.read(0, 0)).toBe("#ff0000");
    expect(map.read(1, 1)).toBe("#00ff00");
    expect(map.read(2, 2)).toBe("#0000ff");
  });
});