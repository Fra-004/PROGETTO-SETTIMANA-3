
const film = [
    {
        Film: 'odissea',
        regista: 'Christopher Nolan',
        anno: '2026',
        genere: 'azione/avventura',
        visto: true
    },
    {
        Film: 'spider-man brand new day',
        regista: 'Destin Daniel Cretton',
        anno: '2026',
        genere: 'fantascienza/avventura',
        visto: true
    },
    {
        Film: 'Micheal',
        regista: ' Antoine Fuqua',
        anno: '2026',
        genere: 'musical/dramma',
        visto: true
    },
    {
        Film: 'Il Diavolo veste prada 2',
        regista: ' David Frankel',
        anno: '2026',
        genere: 'commedia',
        visto: true
    },
    {
        Film: 'Avatar: fuoco e cenere',
        regista: ' James Cameron',
        anno: '2025',
        genere: 'fantascienza/azione',
        visto: false
    },
]

const listaFilm = document.querySelector("#listaFilm");
function visualizzazioneFilm() {
    for (let i = 0; i < film.length; i++) {

        const card = document.createElement("div");
        card.classList.add("cardFilm");

        const informazioni = document.createElement("div");
        informazioni.classList.add("informazioniFilm");

        const titolo = document.createElement("h2");
        titolo.textContent = film[i].Film;

        const dettagli = document.createElement("p");
        dettagli.textContent = film[i].regista + " — " + film[i].anno;

        informazioni.append(titolo);
        informazioni.append(dettagli);

        const pulsanti = document.createElement("div");
        pulsanti.classList.add("pulsantiFilm");

        const stato = document.createElement("button");
        stato.classList.add("statoFilm");

        if (film[i].visto === true) {
            stato.textContent = "Visto";
        } else {
            stato.textContent = "Da vedere";
        }

        const bottoneElimina = document.createElement("button");
        bottoneElimina.textContent = "Elimina";

        pulsanti.append(stato);
        pulsanti.append(bottoneElimina);

        card.append(informazioni);
        card.append(pulsanti);

        listaFilm.append(card);
    }
}

visualizzazioneFilm();
// Ricerca dei film
const ricercaFilm = document.querySelector("#ricercaFilm");
const bottoneReset = document.querySelector("#buttonReset");

ricercaFilm.addEventListener("input", cercaFilm);

function cercaFilm() {
    const nomeCercato = ricercaFilm.value.toLowerCase();
    const cardFilm = document.querySelectorAll(".cardFilm");

    for (let i = 0; i < cardFilm.length; i++) {
        const titolo = cardFilm[i].querySelector("h2").textContent.toLowerCase();

        if (titolo.includes(nomeCercato)) {
            cardFilm[i].style.display = "block";
        } else {
            cardFilm[i].style.display = "none";
        }
    }
}

// Reset della ricerca
bottoneReset.addEventListener("click", function() {
    ricercaFilm.value = "";

    const schedeFilm = document.querySelectorAll(".cardFilm");

    for (let i = 0; i < schedeFilm.length; i++) {
        schedeFilm[i].style.display = "block";
    }
});


const filtroStato = document.querySelector("#statoFilm");

filtroStato.addEventListener("change", filtraStato);

function filtraStato() {
    const statoSelezionato = filtroStato.value;
    const cardFilm = document.querySelectorAll(".cardFilm");

    for (let i = 0; i < cardFilm.length; i++) {
        const titolo = cardFilm[i].querySelector("h2").textContent;

        // Cerco il film corrispondente nell'array
        let filmCorrente;

        for (let j = 0; j < film.length; j++) {
            if (film[j].Film === titolo) {
                filmCorrente = film[j];
            }
        }

        if (statoSelezionato === "tutti") {
            cardFilm[i].style.display = "block";
        } else if (statoSelezionato === "visti" && filmCorrente.visto === true) {
            cardFilm[i].style.display = "block";
        } else if (statoSelezionato === "non-visti" && filmCorrente.visto === false) {
            cardFilm[i].style.display = "block";
        } else {
            cardFilm[i].style.display = "none";
        }
    }
}





const ordinamentoAnno = document.querySelector("#anno");
ordinamentoAnno.addEventListener("change", ordinaFilm);

function ordinaFilm() {
    if (ordinamentoAnno.value === "AnnoCrescente") {
        film.sort((a, b) => Number(a.anno) - Number(b.anno));
    } else {
        film.sort((a, b) => Number(b.anno) - Number(a.anno));
    }

    const cardFilm = document.querySelectorAll(".cardFilm");

    for (let i = 0; i < film.length; i++) {
        for (let j = 0; j < cardFilm.length; j++) {
            if (cardFilm[j].querySelector("h2").textContent === film[i].Film) {
                listaFilm.append(cardFilm[j]);
            }
        }
    }
}