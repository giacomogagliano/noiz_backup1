export interface IstringifyBase64_v1 {
  (this: any): string;
}

export const stringifyBase64_v1: IstringifyBase64_v1 =
  function (this: any) {
    return Buffer.from(JSON.stringify(this)).toString(
      "base64"
    );
  };
