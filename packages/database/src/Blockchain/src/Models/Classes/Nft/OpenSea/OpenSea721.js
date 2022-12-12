import mongoose from "mongoose";
import { nft, Nft } from "../Nft";

export class OpenSeaNft extends Nft {
  constructor(
    name,
    description,
    image,
    trait_type,
    value
  ) {
    super(
      name,
      description,
      image,
      external_url,
    )
    this.attributes = [
      {
        trait_type,
        value
      }
    ]
  }
}
const openSeaNftSchema = new mongoose.Schema({
  nft,
  external_url: String,
  attributes: [{
    trait_type: String,
    value: String
  }]
})
openSeaNftSchema.loadClass(OpenSeaNft)
export let OpenSeaNftDoc = mongoose.model("Open Sea Nft")