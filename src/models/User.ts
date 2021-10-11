import { Database } from "./Database";
import { IGunChainReference } from "gun/types/chain";
// import { IGunCryptoKeyPair } from "gun/types/types";

// type GunAck = {
//   ack: 2;
//   get: string;
//   on: (...args: [unknown, unknown, unknown]) => unknown;
//   put: {
//     alias: string;
//     auth: any;
//     epub: string;
//     pub: string;
//   };
//   sea: IGunCryptoKeyPair;
//   soul: string;
//   err: string;
// };

export class User {
  private static _user: IGunChainReference;

  static username = "";

  static getInstance() {
    if (!User._user) {
      User._user = Database.getInstance()
        .user()
        .recall({ sessionStorage: true });

      // User._user.get("alias").on((username) => {
      //   console.log("alan", username);

      //   User.username = username;
      // });

      // Database.getInstance().on("auth", async () => {
      //   const alias = await User.getInstance().get("alias").on();

      //   User.username = alias;
      // });
    }
    // User.getInstance().get("alias");

    return User._user;
  }

  // static async getUsername() {
  //   return new Promise((res) => {
  //     User.getInstance()
  //       .get("alias")
  //       .on((username) => res(username));
  //   });
  // }

  // static auth(username: string, password: string): Promise<Partial<GunAck>> {
  //   return new Promise((res, rej) => {
  //     User.getInstance().auth(username, password, (ack: Partial<GunAck>) => {
  //       if (ack.err) {
  //         rej(ack.err);
  //       } else {
  //         res(ack);
  //       }
  //     });
  //   });
  // }
}
