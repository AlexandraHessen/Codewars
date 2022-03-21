function validatePIN (pin) {
    if(pin.length===4||pin.length===6){
        if (Number(pin)){
            return true
        } else {
        return false
    }
    } else {
        return false
    }
  //return true or false
}