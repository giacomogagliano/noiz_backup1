export interface ERC20 {
  supply: number;
  tokenName: string;
  tokenSymbol: string;
  allowance: [string, [string, number]];
  transfer: (addressTo: string, amount: number) => void;
  transferFrom: (
    addressFrom: string,
    addressTo: string,
    amount: number
  ) => void;
  totalSupply: () => number;
  balanceOf: (address: string) => number;
  approve: (spender: string, amount: number) => void;
}
