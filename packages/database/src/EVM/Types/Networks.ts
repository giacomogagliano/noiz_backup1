export enum Networks {
  ethereum = "homestead",
  goerli = "goerli",
  polygon = "matic",
  mumbai = "maticmum",
  gnosis = "gnosis",
}

export type NetworksTypes = keyof typeof Networks;

type GnosisChainId = 100;
type GnosisName = "gnosis";
export type GnosisChainInfos = [GnosisChainId, GnosisName];
