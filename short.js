function findShort(s){
    let arr=s.split(' ')
    let min=arr[0].length
    for(let i=0; i<arr.length; i++){
       min=Math.min(min, arr[i].length)
    }
    return min
  }