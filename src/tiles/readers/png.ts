import Raster, { HexRaster } from "../raster";
import { RasterReader } from "../reader";
import { readFileSync } from "fs";
import Jimp from "jimp";

const DEFAULT_CELL = "#000000";

class PngReader implements RasterReader {
  readRaster(assetPath : string) {
    const prefabBuffer = readFileSync(assetPath);
    const image =  new Jimp(Jimp.decoders["image/png"](prefabBuffer));
    const raster = new HexRaster(image.bitmap.width, image.bitmap.height, DEFAULT_CELL);

    for (let hy = 0; hy < image.bitmap.height; hy++) {
      for (let wx = 0; wx < image.bitmap.width; wx++) {
        const px = image.getPixelColor(wx, hy);
        const hex = `#${px.toString(16).padStart(8,"0").slice(0, 6)}`;
        raster.write(wx, hy, hex);
      }
    }

    return raster;
  }
}

export default PngReader;