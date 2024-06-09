import { TableReader } from "../reader";
import Table from "../table";

class JsonReader implements TableReader {
  readTable(assetPath: string): Table {
    return new Table();
  }
}

export default JsonReader;