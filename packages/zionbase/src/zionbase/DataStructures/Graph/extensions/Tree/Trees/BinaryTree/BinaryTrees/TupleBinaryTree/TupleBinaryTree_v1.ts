export type Left = TupleBinaryTree_v1;
export type Right = TupleBinaryTree_v1;
export interface TupleBinaryTree_v1 {
  key: string;
  children: [Left, Right];
}
export class TupleBinaryTree_v1 {}
