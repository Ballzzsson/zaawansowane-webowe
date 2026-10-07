const technologie = [
    "HTML",
    "Css",
    "Java Script",
    "SQL",
    "PHP",
    "Inkscape"
];

function wyswietlTechnologie(tablica) {
    const lista = document.querySelector("#lista-umiejetnosci");

    for (const technologia of tablica) {
        const pozycja = document.createElement("li");
        pozycja.textContent = technologia;
        lista.appendChild(pozycja);
    }
}

wyswietlTechnologie(technologie);


const formularzKontaktowy = document.querySelector("#formularz-kontakt");
const wiadomosc = document.querySelector("#komunikat");


function wyswietlWiadomosc(tekst, typ) {

    wiadomosc.textContent = tekst;
    wiadomosc.classList.remove("blad", "sukces");
    wiadomosc.classList.add(typ);
}

formularzKontaktowy.addEventListener("submit", function (zdarzenie) {

    zdarzenie.preventDefault();

    const osoba = document.querySelector("#imie").value.trim();
    const adres = document.querySelector("#email").value.trim();
    const wybranyTemat = document.querySelector("#temat").value;
    const zawartosc = document.querySelector("#tresc").value.trim();

    if (osoba === "") {
        wyswietlWiadomosc("Podaj imię.", "blad");
        return;
    }

    if (adres === "") {
        wyswietlWiadomosc("Podaj adres e-mail.", "blad");
        return;
    }

    if (wybranyTemat === "") {
        wyswietlWiadomosc("Wybierz temat wiadomości.", "blad");
        return;
    }

    wyswietlWiadomosc(
        "Dziękuję, " + osoba + ". Wiadomość na temat „" + wybranyTemat + "” została przyjęta.",
        "sukces"
    );

    console.log("Dane z formularza:", {
        osoba: osoba,
        adres: adres,
        wybranyTemat: wybranyTemat,
        zawartosc: zawartosc
    });

    formularzKontaktowy.reset();
});


const zmianaMotywu = document.querySelector("#przelacznik-motywu");

zmianaMotywu.addEventListener("click", function () {
    const ciemnyTryb = document.body.classList.toggle("ciemny");

    if (ciemnyTryb) {
        zmianaMotywu.textContent = "Jasny motyw";
    } else {
        zmianaMotywu.textContent = "Ciemny motyw";
    }
});
