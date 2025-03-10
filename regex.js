const testStr = "Mi chiamo pippo, ho 7 fratelli, mi piace il numero 5 e vado spesso al parco che dista 8 km da casa";
const rgx = /\d+/g;

console.log(rgx.test(testStr));

console.log(testStr.match(rgx));

console.log(rgx.exec(testStr));

let array;
let result = [];
while ((array = rgx.exec(testStr)) !== null) {
    result.push({ value: array[0], index: array['index'] })
}
console.log(result);
//riscrittura metodo più chiaro
// let array;
// let result=[];
// while (array !== null) {
//     array = rgx.exec(testStr);
//     if (array !== null) {
//         const match = {
//             value: array[0],
//             index: array['index']
//         }
//         result.push(match);
//     }
// }

const rgx2 = /(\d+) +(\w+)/g;

console.log(rgx2.test(testStr));

console.log(testStr.match(rgx2));

console.log(rgx2.exec(testStr));

let array2;
let result2=[];
while (array2 !== null) {
    array2 = rgx2.exec(testStr);
    if (array2 !== null) {
        for (let i = 0; i < array2.length; i++) {
            const match = {
                value1: array2[1],
                value2: array2[2],
                index: array2['index']
            }
            result.push(match);
        }           
    }
}
console.log(result);