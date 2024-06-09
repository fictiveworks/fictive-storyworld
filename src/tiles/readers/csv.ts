import { TableReader } from "../reader";
import Table from "../table";

class CsvReader implements TableReader {
  readTable(assetPath: string): Table {
    return new Table();
  }
}

export default CsvReader;