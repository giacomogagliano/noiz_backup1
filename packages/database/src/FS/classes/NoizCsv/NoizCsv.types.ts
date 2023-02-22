import * as _NoizCsv from ".";

const NoizCsv: NoizCsv = _NoizCsv;

interface NoizCsv {
  NoizCsv: AbtractNoizCsvCtor;
  NoizCsvCtor: AbtractNoizCsvCtor;
}

abstract class AbtractNoizCsv {
  abstract records: any[];
}

interface AbtractNoizCsvCtor {
  new (path: string): AbtractNoizCsv;
}
