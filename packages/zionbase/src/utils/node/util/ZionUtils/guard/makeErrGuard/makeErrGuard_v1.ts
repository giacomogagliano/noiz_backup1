export interface ImakeErrGuard_v1 {
  <T>(data: T): NonNullable<T>;
}

export const makeErrGuard_v1: ImakeErrGuard_v1 = function (
  data
) {
  // TODO #153 @giacomogagliano aggiungere un modo per
  // identificare il nome del paramentro, o ad esempio
  // convertire il tipo che arriva dal dato passato in
  // string per il messaggio di errore
  const isNumber = typeof data === "number";
  if (isNumber) {
    if (data === undefined || data === null)
      throw new Error(`the passed data is: ${data}`);
  } else if (!data)
    throw new Error(`the passed data is: ${data}`);
  return data;
};
