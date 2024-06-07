enum TileType {
  ground,
  floor,
  wall,
  scenery,
  terrain
}

interface Tile {
 readonly name : string;
 readonly type : string;
}

class Table {
  private tiles : Tile[];

  constructor() {
    this.tiles = [];
  }

  add(tile : Tile) {
    this.tiles.push(tile);
  }
}

export default Table;