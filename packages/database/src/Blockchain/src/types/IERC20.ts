export type Address = string;

export interface IERC721 {
  transferEvent(from: Address, to: Address, tokenId: number): void;
  approvalEvent(owner: Address, approved: Address, tokenId: number): void;
  balanceOf(owner: Address): number;
  ownerOf(tokenId: number): Address;
}
