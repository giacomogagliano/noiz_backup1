import { StaticImageData } from "next/image";

export type DataType = {
  [key: string]: string | number | boolean | StaticImageData[];
};
