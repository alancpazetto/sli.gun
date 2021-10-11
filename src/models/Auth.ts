import { Auth as AuthGunUtil } from "gun-util";
import { db } from "./Database";

export class Auth {
  private static _auth: AuthGunUtil;

  static getInstance() {
    if (!Auth._auth) {
      Auth._auth = new AuthGunUtil(db);
    }

    return Auth._auth;
  }
}
