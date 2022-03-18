Array.prototype.square = function(){
    return this.map(num => Math.pow(num, 2));
  }
  
  Array.prototype.cube = function(){
    return this.map(num => Math.pow(num, 3));
  }
  
  Array.prototype.average = function(){
    return this.sum() / this.length;
  }
  
  Array.prototype.sum = function(){
    return this.reduce((num1, num2) => num1 + num2, 0);
  }
  
  Array.prototype.even = function(){
    return this.filter(num => num % 2 === 0);
  }
  
  Array.prototype.odd = function(){
    return this.filter(num => num % 2 !== 0);
  }