interface options {
  encoding: BufferEncoding;
  format?: "bit" | "byte";
}

interface IcalculateBitsForString {
  (x: string): number;
  (x: string, e: BufferEncoding): number;
  (s: string, o: options): number;
}
const calculateBitsForString: IcalculateBitsForString = (x: string, e: BufferEncoding | options = "utf-8") => {
  if (e) {
    if (typeof e === "string") return Buffer.byteLength(x, e) * 8;
    else return -1;
  } else {
    return x.length * 8;
  }
};

interface IcalculateBitsForNumbers {
  (x: number): number;
}
const calculateBitsForNumbers: IcalculateBitsForNumbers = (x: number) => Math.ceil(Math.log2(x + 1));

interface IcalculateBits_v1 {
  (x: string, o?: options): number;
  (x: number): number;
}

enum ERRORS {
  TYPE_NOT_IMPLEMENTED = "Bit length calculation on this type of file has yet to be implemented",
}

export const calculateBits_v1: IcalculateBits_v1 = x => {
  if (typeof x === "number") return calculateBitsForNumbers(x);
  else if (typeof x === "string") return calculateBitsForString(x);
  else throw new Error(ERRORS.TYPE_NOT_IMPLEMENTED);
};
