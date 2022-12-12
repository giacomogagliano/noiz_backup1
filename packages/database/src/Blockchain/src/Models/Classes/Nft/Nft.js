import mongoose from 'mongoose';
import { ZionEmitter } from '../../../Classes/Node Standard Modules/ZionEmitter.js';

export class Nft extends ZionEmitter {
  /**
   *
   * @param {string} name rappresenta il nome del token
   * @param {string} description descrizione del token
   * @param {string} image url dell'immagine del token
   * @param {string} external_url url che punta verso la
   * pagina del token su un sito o sulla dapp del progetto.
   */
  constructor(name, description, image, external_url) {
    super();

    this.name = name;
    this.description = description;
    this.image = image;
    this.external_url = external_url;

    this.control = {
      constructorName: this.constructor.name,
      JSON: {
        numberOfTimesSaveJSONWasCalledOnThisNft: 0,
      },
    };
  }
  async saveToDb() {
    await [`${this.constructor.name}Doc`].create(this);

    return this;
  }
  async saveJSON() {
    /**
     * increment the number of times save JSON was
     * called on this Znt
     **/
    /**
     * writes a JSON file omittin unnecessary fields
     **/
    return this;
  }
  log() {
    console.log('Oggetto che fa parte della classe:', this);
    return this;
  }
  // logResult(res){
  //   console.log(res);
  //   return this
  // }
}

export const nft = {
  name: String,
  description: String,
  image: String,
  external_url: String,
};
const nftSchema = new mongoose.Schema(nft);
// nftSchema.loadClass(Nft)
export const NftDoc = mongoose.model('Nft', nftSchema);
let c = new NftDoc({ name: 'ciao' });

console.log(c);
