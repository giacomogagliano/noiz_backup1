export interface Idecode_v1 {
  (buffer: Buffer): string;
}

export function decode_v1(buffer: Buffer) {
  return Buffer.from(
    buffer.toString("utf8"),
    "base64"
  ).toString();
}
