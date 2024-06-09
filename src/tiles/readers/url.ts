import { TableReader } from "../reader";
import Table from "../table";

class UrlReader implements TableReader {
  readTable(assetPath: string): Table {
    return new Table();
  }
}

export default UrlReader;