import Gun from "gun";
import { IGunChainReference } from "gun/types/chain";
import { atom } from "jotai";

export class Database {
  private static _gun: IGunChainReference;

  static getInstance() {
    if (!Database._gun) {
      Database._gun = Gun();
    }

    return Database._gun;
  }
}

export const db = Gun();

export const user = db.user().recall({ sessionStorage: true });

export let userName = "";

// db.on((e) => console.log("alan", e));
// db.on("auth", (e) => console.log("alan", e));
// user.get("alias").on((e) => {
//   user.get("alias").once((data) => {
//     userName = data as unknown as string;
//   });
// });
