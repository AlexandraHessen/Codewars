function prefill(n, v) {
    if ( !/^\d+$/.test(''+n)  ) 
       throw new TypeError(n+" is invalid");
    return Array(+n).fill(v);
  }
  
  function prefill(n, v) {
    if(parseInt(n) != Math.abs(n)) {
      throw new TypeError(`${n} is invalid`)
    }
  
    return (n == 0) ? [] : new Array(n).fill(v)
  }