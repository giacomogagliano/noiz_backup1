const { config } = require("dotenv");
const { ethers } = require("ethers");
const {} = require("node-localstor");
config();

const polygon = process.env.ALCHEMY_POLYGON_HTTPS;

const provider = new ethers.providers.JsonRpcProvider(polygon);
// CLASSE => CONTRATTO CODICE
// crea il prototipo dell'oggetto/contratto
// OGGETTO => CONTRATTO DISPIEGATO
// Un contratto ha un indirizzo
// Un contratto è persistente
// Un oggetto ha un richiamo nella memoria
// Un oggetto è persistente nella memoria se non viene riavviato o cancellato
// Un oggetto potrebbe avere un indirizzo in una look-up table con indice uguale ad un indirizzo
// Per farlo persistere deve essere salvato su ub database. Quindi la cosa piu simile ad un contratto è un oggetto che rappresenta un documento in un database.
const instance = new ethers.Contract(addr, abi, provider);

class Zion extends ethers.Contract {
  constructor(name) {
    super(addressOrName, contractInterface, signerOrProvider);
    this.name = name;
  }
}
