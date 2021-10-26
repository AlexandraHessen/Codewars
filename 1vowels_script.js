'use strict'
let strPl = prompt('Введите строку:')
//let strPl='This website is for losers LOL!'     
let delVow = str => {
    let vow = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++) {
        if ((vow.indexOf(str[i])) !== -1)
            str = str.replace(str[i], '')
    }
    return str;

}
alert(delVow(strPl));



// let str=prompt('Введите строку:');        
// let strArr=str.toLowerCase().split('');
// let vowArr=['a', 'e', 'i', 'o', 'u'];
// function delVowel(v){
//     return(vowArr.indexOf(v)==-1);
// }
// let strArrV=strArr.filter(delVowel);
// alert(strArrV);
// console.log(strArrV.tostr());