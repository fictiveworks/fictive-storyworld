import Raster from "./raster";
import Table from "./table";

interface RasterReader {
  readRaster(assetPath : string) : Raster<string | number>
}

interface TableReader {
  readTable(assetPath : string) : Table
}

export {
  RasterReader,
  TableReader
}