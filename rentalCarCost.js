function rentalCarCost(d) {
    let price=40;
    if (d>=3){
        if(d>=7){
            return d*price-50
        }
        return d*price-20
    } else {
        return d*price
    }

  }

  console.log(rentalCarCost(1));
  console.log(rentalCarCost(3));
  console.log(rentalCarCost(4));
  console.log(rentalCarCost(5));
  console.log(rentalCarCost(7));