export interface DefaultProps_v1<
  LT = string,
  SLT = string
> {
  css?: string;
  className?: string;
  children?: React.ReactNode;
  key?: number;
  layout?: LT;
  style?: SLT;
}
