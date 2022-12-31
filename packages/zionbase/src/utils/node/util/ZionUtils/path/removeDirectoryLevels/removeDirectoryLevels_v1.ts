import * as path from "path";

export interface IremoveDirectoryLevels_v1 {
  (filePath: string, levels: number): string;
}

/**
 * Rimuove i livelli di directory specificati dal percorso del file
 * @param filePath il percorso del file da modificare
 * @param levels il numero di livelli di directory da rimuovere
 * @return il nuovo percorso del file con i livelli di directory rimossi
 */
export function removeDirectoryLevels_v1(
  filePath: string,
  levels: number
): string {
  if (levels <= 0) {
    return filePath;
  }

  // Rimuove un livello di directory dal percorso del file
  const newFilePath = path.dirname(filePath);

  // Chiama la funzione ricorsivamente per rimuovere il livello successivo
  return removeDirectoryLevels_v1(newFilePath, levels - 1);
}
