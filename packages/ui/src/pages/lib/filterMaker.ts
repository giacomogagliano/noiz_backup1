export const filterMaker =
  (file: string) => (dir: string) => {
    if (dir === file) return false;
    else return true;
  };
