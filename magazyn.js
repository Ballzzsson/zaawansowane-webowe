import fs from "node:fs/promises";
import path from "node:path";

const PLIK = path.join(import.meta.dirname, "zadania.json");

/**
 * Wczytuje listę zadań z pliku.
 *
 * @returns {Promise<Array<{tekst: string, zrobione: boolean}>>}
 * @throws {Error} 
 */
export const wczytaj = async () => {
    try {
        const tekst = await fs.readFile(PLIK, "utf-8");
        return JSON.parse(tekst);
    } catch (blad) {
        if (blad.code === "ENOENT") {
            return [];
        }
        throw blad;
    }
};

/**
 * @param {Array<{tekst: string, zrobione: boolean}>}
 * @returns {Promise<void>}
 */
export const zapisz = async (zadania) => {
    await fs.writeFile(PLIK, JSON.stringify(zadania, null, 2), "utf-8");
};
