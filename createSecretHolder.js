function createSecretHolder(secret) {
    return {
      getSecret: () => secret,
      setSecret: (s) => secret = s
    };
  }
  function createSecretHolder(secret) {
      getSecret: () => secret
      setSecret: (s) => (secret = s)
  }
  
  const isSantaClausable = obj =>
  [`sayHoHoHo`, `distributeGifts`, `goDownTheChimney`].every(val => typeof obj[val] === `function`);
  
  function isSantaClausable(obj) {
    return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every((method) => typeof obj[method] === 'function');
  }
  