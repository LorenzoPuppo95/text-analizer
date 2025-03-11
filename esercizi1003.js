const lista = `Mele;5;Supermercato
Banane;3;Supermercato
Arance;4;Supermercato
Pane;2;Panetteria
Latte;1;Supermercato
Uova;12;Supermercato
Carote;500;Supermercato
Patate;1;Supermercato
Pollo;500;Macelleria
Manzo;300;Macelleria
Pesce;400;Pescheria
Gamberetti;200;Pescheria
Calamari;300;Pescheria
Vino rosso;1;Enoteca`

//1) creare una funzione che, partendo da lista, ritorni un array di oggetti: {nome: value, quantità: value, provenienza:value}
function fromCsvListToObjectArray2(csv) {
    const rgx = /^(?<nome>.+);(?<quantita>\d+);(?<provenienza>.+)$/gm;
    let match;
    const result = [];
    while (match !== null) {
        match = rgx.exec(csv);
        if (match) {
            result.push(match.groups);
        }
    }
    return result;
}

//2) creare una funzione che, partendo da lista, ritorni un array di oggetti che hanno come provenienza il supermercato: {nome: value, quantità: value, provenienza:value}
function fromCsvListToObjectArraySupermercato(csv) {
    const rgx = /^(?<nome>.+);(?<quantita>\d+);(?<provenienza>Supermercato)$/gm;
    let match;
    const result = [];
    while (match !== null) {
        match = rgx.exec(csv);
        if (match) {
            result.push(match.groups);
        }
    }
    return result;
}

//3) creare una funzione che, partendo da lista e da una stringa che indica la provenienza, ritorni un array di oggetti: {nome: value, quantità: value, provenienza:value}
function fromCsvListToObjectArrayWithSearch(csv, searchStr) {
    const temp = `^(?<nome>.+);(?<quantita>\\d+);(?<provenienza>${searchStr})$`;
    const regexp = new RegExp(temp, 'gmi')
    let match;
    const result = [];
    while (match !== null) {
        match = regexp.exec(csv);
        if (match) {
            result.push(match.groups);
        }
    }
    return result;
}

//4) creare una funzione che, partendo da lista e da un array di keys, ritorni un array di oggetti: {keys[0]: value, keys[1]: value, keys[2]: value}

function fromCsvListToObjectArrayWithCustomKeys(csv, keys) {
    const temp = `^(?<${keys[0]}>.+);(?<${keys[1]}>\\d+);(?<${keys[2]}>.+)$`;
    const regexp = new RegExp(temp, 'gm');
    let match;
    const result = [];
    while (match !== null) {
        match = regexp.exec(csv);
        if (match) {
            result.push(match.groups);
        }
    }
    return result;
}