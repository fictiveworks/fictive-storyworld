import { CharRaster } from "../raster";
import { RasterReader } from "../reader";
import { readFileSync } from "fs";

class TxtReader implements RasterReader {
  readRaster(assetPath : string) {
    const raw = readFileSync(assetPath).toString();
    const cells = raw.split("\n").map(row => row.split("")).filter(row => row.length > 0);
    const raster = new CharRaster(cells[0].length, cells.length, " ");
    raster.writeAll(cells);
    return raster;
  }
}

export default TxtReader;