import Definition from "./definition";
import Level from "../objects/level";

/**
 * Aggregation of world content collected and expanded into 
 */
class Bundle {
  levels : Level[] = [];

  // TODO: probably don't need this here
  private definition : Definition;

  constructor(definition : Definition) {
    this.definition = definition;
  }
}

export default Bundle;