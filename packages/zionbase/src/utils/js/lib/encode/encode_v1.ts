export interface Iencode_v1 {
  (string: string): string;
}

export function encode_v1(string: string) {
  let buffer = Buffer.from(string);
  return buffer.toString("base64");
}
