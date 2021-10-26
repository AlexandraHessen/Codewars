'use strict'
let strPl = prompt('Введите слово:');
let obj = {};
let isIsogram = str => {
    str = str.toLowerCase().split('');
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (!(str[i] in obj))
            obj[str[i]] = 0;
        obj[str[i]]++;
        if (obj[str[i]] != 1) {
            return false;
        }
    }
    return true;
}

(isIsogram(strPl)) ?
alert(`Это изограм.`):
alert(`Это не изограм.`);

console.log(isIsogram(strPl));