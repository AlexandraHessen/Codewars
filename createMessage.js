const createMessage = str => n => {
    if (n === undefined) { return str;}
    return createMessage(str+ " "+n);
  }
  
  function createMessage(str) {
      return function(next){
        (next === undefined)
        ? str
        : createMessage(str + " "+ next);
      }
  }