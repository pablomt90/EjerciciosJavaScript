function checkMayus() {
    const frase = prompt("Introduce una frase");
    
    if (frase === frase.toUpperCase()) {
      console.log("La frase está escrita en mayúsculas");
    } else if (frase === frase.toLowerCase()) {
      console.log("La frase está escrita en minúsculas");
    } else {
      console.log("La frase está escrita con mayúsculas y minúsculas");
    }
  }
  
  checkMayus();