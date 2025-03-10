const lista = `
Mele;5;Supermercato
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
function parseListToObjectArray(lista) {
    const lines = lista.split('\n');
    const result = [];
    lines.forEach(line => {
        const regex = /^([^;]+);([^;]+);([^;]+)$/;
        const matches = line.match(regex);
        if (matches) {
            result.push({
                nome: matches[1].trim(),
                quantita: matches[2].trim(),
                provenienza: matches[3].trim()
            });
        }
    });
    return result;
}

//2) creare una funzione che, partendo da lista, ritorni un array di oggetti che hanno come provenienza il supermercato: {nome: value, quantità: value, provenienza:value}
function filterBySupermercato(lista) {
    const lines = lista.split('\n');
    const result = [];
    lines.forEach(line => {
        const regex = /^([^;]+);([^;]+);([^;]+)$/;
        const matches = line.match(regex);
        if (matches && matches[3].trim() === 'Supermercato') {
            result.push({
                nome: matches[1].trim(),
                quantita: matches[2].trim(),
                provenienza: matches[3].trim()
            });
        }
    });
    return result;
}

//3) creare una funzione che, partendo da lista e da una stringa che indica la provenienza, ritorni un array di oggetti: {nome: value, quantità: value, provenienza:value}
function filterByProvenienza(lista, provenienza) {
    const lines = lista.split('\n');
    const result = [];
    lines.forEach(line => {
        const regex = /^([^;]+);([^;]+);([^;]+)$/;
        const matches = line.match(regex);
        if (matches && matches[3].trim() === provenienza) {
            result.push({
                nome: matches[1].trim(),
                quantita: matches[2].trim(),
                provenienza: matches[3].trim()
            });
        }
    });
    return result;
}

//4) creare una funzione che, partendo da lista e da un array di keys, ritorni un array di oggetti: {keys[0]: value, keys[1]: value, keys[2]: value}
function filterListWithCustomKeys(lista, keys) {
    const lines = lista.split('\n');
    const result = [];
    lines.forEach(line => {
        const regex = /^([^;]+);([^;]+);([^;]+)$/;
        const matches = line.match(regex);
        if (matches) {
            let obj = {};
            for (let i = 0; i < keys.length; i++) {
                obj[keys[i]] = matches[i + 1].trim();
            }
            result.push(obj);
        }
    });
    return result;
}

// console.log(parseListToObjectArray(lista));
// console.log(filterBySupermercato(lista));
// console.log(filterByProvenienza(lista, 'Macelleria'));
console.log(filterListWithCustomKeys(lista, ['prodotto', 'quantita', 'origine']));