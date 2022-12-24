// TODO #173 @giacomogagliano continuare
export type tuple = [
  number | undefined,
  string | undefined
];
export type map = [tuple];
export class erc1155 {
  map: map = [[undefined, undefined]];
  supply: [[number | undefined, number | undefined]] = [
    [undefined, undefined],
  ];
  tokenName: string = "";
  tokenSymbol: string = "";
  constructor() {}
  mint(
    to: string,
    id: number,
    amount: number,
    data: string
  ) {
    amount;
    const tokenIdSupply = this.supply.find(
      tuple => tuple[0] === id
    );
    if (tokenIdSupply === undefined) return;
    if (tokenIdSupply[0] === undefined) return;
    if (tokenIdSupply[1] === undefined) return;
    if (tokenIdSupply[1] > 1) return;
    this.#mint(to, id, 1, data);
  }
  #mint(
    to: string,
    id: number,
    amount: number,
    data: string
  ) {
    amount;
    data;
    if (this.map[0] === undefined) this.map.pop();
    this.map.push([id, to]);
  }
}
