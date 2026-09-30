/* =========================================================
   Kartkówka 1 — grupa A1, wariant 2
   Filmy
   =========================================================

   Tytuł strony:  Filmy
   Wyświetl:      tytuł i rok
   Filtruj:       rok 2010 lub nowszy
   Wyróżnij:      ocena co najmniej 8.5
   Podsumowanie:  średnia ocena wyświetlonych filmów

   Nie zmieniaj danych w tym pliku.
   ========================================================= */

const filmy = [
    { tytul: "Incepcja",     rok: 2010, ocena: 8.8 },
    { tytul: "Interstellar", rok: 2014, ocena: 8.6 },
    { tytul: "Tenet",        rok: 2020, ocena: 7.3 },
    { tytul: "Dunkierka",    rok: 2017, ocena: 7.8 },
    { tytul: "Prestiż",      rok: 2006, ocena: 8.5 },
    { tytul: "Oppenheimer",  rok: 2023, ocena: 8.3 }
];

const wyswietl = (filmy) => {
    return filmy.filter(p => p.rok >= 2010).map(p => `<li>${p.rok}<br>${p.tytul}</li>`).join("");
};


document.write(wyswietl(filmy));

document.write("</ul>");
