class Raster<MapSymbol> {
  private cells : Array<MapSymbol>[];
  private defaultCell : MapSymbol;
  public readonly width : number;
  public readonly height : number;

  constructor(width : number, height : number, defaultCell : MapSymbol) {
    this.cells = Array(height);

    for (let h = 0; h < width; h++) {
      this.cells[h] = Array(width).fill(defaultCell);
    }

    this.defaultCell = defaultCell;
    this.width = width;
    this.height = height;
  }

  read(x : number, y : number) : MapSymbol {
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      return this.defaultCell;
    }

    return this.cells[y][x];
  }

  write(x : number, y : number, symbol : MapSymbol) {
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      return;
    }

    this.cells[y][x] = symbol;
  }

  writeAll(cells : Array<MapSymbol>[]) {
    this.cells = cells;
  }
}

export default Raster;
export const HexRaster = Raster<string>;
export const IntRaster = Raster<number>;
export const CharRaster = Raster<string>;