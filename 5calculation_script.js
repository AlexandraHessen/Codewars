'use strict'
let strPl=prompt('Введите строку:'); 
function calc(str){
    let total1='';
    let total2='';
    for (let i=0; i<str.length; i++){
        total1+=str[i].charCodeAt();
    }
    for (let i=0; i<total1.length; i++){
        if (total1[i]=="7"){
            total2=total1.replaceAll(total1[i], '1');
        }
    }
    total1=total1.split('');
    let total1Sum=0;
    let total2Sum=0;

    function numb (arr){
        let sum=0;
        for (let i=0; i<arr.length; i++){
            sum+=parseInt(arr[i]);
        }
        return sum;
    }

    return (numb(total1)-numb(total2));
}
alert(`Разница сумм = ${calc(strPl)}`)