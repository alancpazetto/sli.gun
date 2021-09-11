import { IGunChainReference } from "gun/types/chain";
import { Database } from "./Database";

export class User {
  private static _user: IGunChainReference;

  static get instance() {
    if (!User._user) {
      User._user = Database.instance.user();
    }

    return User._user;
  }
}
