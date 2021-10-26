'use strict'
let strPl="recede";
function dubl (str){
    str=str.split('');
    for (let i=0; i<str.length; i++){
      let ind=0;
      ind=str.indexOf(str[i]);
      console.log(ind);
      let ind2=0;
      ind2=str.indexOf(str[i], ind+1)
      console.log(ind2);
      
      if ((ind2==-1)&&(str.lastIndexOf(str[i], ind-1)==-1)){
        console.log(str[i]);
            str[i]=str[i].replace(str[i], '(')
            console.log(str[i]);
        } else {
            str[i]=str[i].replace(str[i], ')')
            console.log(str[i]);
        }
    }
            //               if(ind2==-1){
            //  str[i]=str[i].replace(str[i], '(')
            //               }else{
            //                   console.log('2');

            //               }
      

    
    return str;
}

console.log(dubl(strPl));
