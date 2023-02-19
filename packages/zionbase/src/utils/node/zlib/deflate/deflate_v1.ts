import { deflate as zlibdeflate } from "zlib";

export interface Ideflate_v1 {
  (buffer: Buffer): Promise<Buffer>;
}

export async function deflate_v1(buffer: Buffer) {
  return new Promise<Buffer>((res, rej) => {
    zlibdeflate(buffer, (e, response) => {
      if (e) throw rej(e.message);
      res(response);
    });
  });
}
