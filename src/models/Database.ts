import "gun/sea";

import Gun from "gun";
import { IGunChainReference } from "gun/types/chain";

export class Database {
  private static _gun: IGunChainReference;

  static get instance() {
    if (!Database._gun) {
      Database._gun = Gun();
    }

    return Database._gun;
  }
}
