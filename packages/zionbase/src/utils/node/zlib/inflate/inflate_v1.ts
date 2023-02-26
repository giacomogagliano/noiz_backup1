import { inflate as zlibinflate } from "zlib";

export interface Iinflate_v1 {
  (buffer: Buffer): Promise<Buffer>;
}

export async function inflate_v1(buffer: Buffer) {
  return new Promise<Buffer>((res, rej) => {
    zlibinflate(buffer, (e, response) => {
      if (e) throw rej(e.message);
      else {
        res(response);
      }
    });
  });
}
