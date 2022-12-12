// import mongoose from "mongoose";
// import { nft, Nft } from "../Nft.js";

import { Nft } from "../Nft";

export class Znft extends Nft {
  constructor(
    name,
    description,
    image,
    external_url
    ) {
    super(
      name,
      description,
      image,
      external_url
    )
  }
  deposit()
  withdraw()
  
}

// export class Znft extends Nft {
//   constructor(
//     name,
//     description,
//     image,
//     external_url,

//     updated_field,
//     updated_at,
//     updated_by,
//     is_validated,
//     is_upgradeable
//   ) {
//     super(
//       name,
//       description,
//       image,
//       external_url,
//     )
//     this.telegramChat
//     this.created_at = (() => new Date)()
//     this.update = {
//       updated_field: updated_field? updated_field: undefined,
//       updated_at: updated_at? updated_at: undefined,
//       updated_by: updated_by? updated_by: undefined,
//     }
//     this.validation = {
//       is_validated
//     }
//     this.upgradeability ={
//       is_upgradeable
//     }
//   }
// }

// const znftSchema = new mongoose.Schema({
//   nft,
//   update: {
//     updated_field: String,
//     updated_at: Date,
//     updated_by: {
//       type: mongoose.SchemaTypes.ObjectId,
//       ref: "User"
//     }
//   },
//   validation: {
//     is_validated: Boolean
//   }
// })
// znftSchema.loadClass(Znft)
// const ZnftDoc = mongoose.model("Znft", znftSchema)