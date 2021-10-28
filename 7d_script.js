'use strict'
let strPl="recede";
function dubl (str){
    let obj={};
    str=str.toLowerCase().split('');
    for (let i=0; i<str.length; i++){
        if (!(str[i] in obj))
            obj[str[i]]=0;
        obj[str[i]]++;
        if (obj[str[i]]==1){
            str[i]=str[i].replace(str[i], '(')
        } else {
            str[i]=str[i].replace(str[i], ')')
        }
    }

    console.log(obj);
    return (str.toString().replaceAll(',', ''));
}

console.log(dubl(strPl));








                // ind=str.indexOf(str[i]);
        // console.log(ind)
        // // // if (ind!==i){

        // // //     console.log('repet')

        // // }
