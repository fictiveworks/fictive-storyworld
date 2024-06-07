import { describe, it, expect } from "vitest";
import { HexRaster } from "../../../src/tiles/raster";
import PngReader from "../../../src/tiles/readers/png";

describe("PngReader", d => {
  const reader = new PngReader();
  const raster = reader.readRaster(__dirname + "/3x3map.png");

  it("reads hex values from pixels", t => {
    expect(raster.read(0, 0)).toBe("#2a9fdb");
    expect(raster.read(1, 0)).toBe("#ffffff");
    expect(raster.read(2, 0)).toBe("#bb1f58");
    expect(raster.read(0, 1)).toBe("#ffffff");
    expect(raster.read(1, 1)).toBe("#199337");
    expect(raster.read(2, 1)).toBe("#ffffff");
    expect(raster.read(0, 2)).toBe("#5d23d3");
    expect(raster.read(1, 2)).toBe("#ffffff");
    expect(raster.read(2, 2)).toBe("#dc9c31");
  });
});