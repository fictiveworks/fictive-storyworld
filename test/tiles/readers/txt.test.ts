import { describe, it, expect } from "vitest";
import { CharRaster } from "../../../src/tiles/raster";
import TxtReader from "../../../src/tiles/readers/txt";

describe("TxtReader", d => {
  const reader = new TxtReader();
  const raster = reader.readRaster(__dirname + "/3x3map.txt");

  it("reads char values from text", t => {
    expect(raster.read(0, 0)).toBe("@");
    expect(raster.read(1, 0)).toBe("$");
    expect(raster.read(2, 0)).toBe(";");
    expect(raster.read(0, 1)).toBe("%");
    expect(raster.read(1, 1)).toBe("!");
    expect(raster.read(2, 1)).toBe("*");
    expect(raster.read(0, 2)).toBe("X");
    expect(raster.read(1, 2)).toBe("?");
    expect(raster.read(2, 2)).toBe(":");
  });
});