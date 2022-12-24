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
  if (!data) throw new Error("no options given");
  return data;
};
