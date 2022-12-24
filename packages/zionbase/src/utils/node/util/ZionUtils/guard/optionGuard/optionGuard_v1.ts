export interface IoptionGuard_v1 {
  <T, Option, Output extends {}>(
    data: T,
    errOption: [Option, Output][]
  ): [T, Output];
}

export const optionGuard_v1: IoptionGuard_v1 = function (
  data,
  errOption
) {
  // TODO #154 @giacomogagliano cambiare questa funzione e
  // renderla simile a switch
  if (!errOption[0]) throw new Error("no options given");
  if (!errOption[1]) throw new Error("no options given");
  if (!errOption[2]) throw new Error("no options given");
  if (!errOption[0][1]) throw new Error("");
  if (!errOption[1][1]) throw new Error("");
  if (!errOption[2][1]) throw new Error("");
  if (!data) throw new Error("");
  if (data === errOption[0][0])
    return [data, errOption[0][1]];
  if (data === errOption[1][0])
    return [data, errOption[1][1]];
  if (data === errOption[2][0])
    return [data, errOption[2][1]];
  return [data, errOption[0][1]];
};
