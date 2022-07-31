// ---------------- QUOKKA --------------------------------

({
    "plugins": ["jsdom-quokka-plugin"],
    "jsdom": {
        "file": "./1. Escuela Desarrollo Web/32-API-REST/project/index.html",
    },
    "env": {
        "params": {
            "runner": "--experimental-fetch"
        }
    }
})

// ---------------- QUOKKA --------------------------------

const API_URL = 'https://uselessfacts.jsph.pl/'
const OPTIONS = [
    "random",
    ".json",
    "?language=en"
]


const fetchPhrase = async (API_URL) => {

    const res = await fetch(`${API_URL}${OPTIONS[0]}${OPTIONS[1]}${OPTIONS[2]}`);
    const data = await res.json();

    console.log(data, '    <- data');
    return data
}


const changeRandomFact = async () => {

    const data = await fetchPhrase(API_URL);

    P_RANDOM_FACT.innerText = `“${data.text}”`
}

const P_RANDOM_FACT = document.getElementById('random-fact')