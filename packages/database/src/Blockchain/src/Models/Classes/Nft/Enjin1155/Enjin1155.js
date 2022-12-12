import mongoose from "mongoose";
import { nft, Nft } from "../Nft";

export class Enjin1155 extends Nft {
  constructor(
    name,
    description,
    image,
    simple_property,
    rpname,
    value,
    display_value,
    rpclass,
    color,
    font_weight,
    text_decoration,
    apname,
    values,
    apclass
  ) {
    super(
      name,
      description,
      image)
    this.properties = {
      simple_property,
      rich_property: {
        rpname,
        value,
        display_value,
        rpclass,
        css: {
          color,
          font_weight,
          text_decoration
        }
      },
      array_property: {
        apname,
        value: [values],
        apclass
      }
    }
  }
}
const enjin1155Schema = new mongoose.Schema({
  nft,
  properties: {
    simple_property: String,
    rich_property: {
      name: String,
      value: String,
      display_value: String,
      class: String,
      css: {
        color: String,
        font_weight: String,
        text_decoration: String
      }
    },
    array_property: {
      name: String,
      value: [Number],
      class: String
    }
  }
})
enjin1155Schema.loadClass(Enjin1155)
export let Enjin1155Doc = mongoose.model("Enjin 1155 Nft", enjin1155Schema)