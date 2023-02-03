function NumerosPares(){
    const numeritos = prompt("Ingrese una serie de números separados por coma", "Ej: 1,5,8,78,64").split(',');
    const sum = 0;
    for (const i =0; i < numeritos.length; i++){
        if (numeritos[i]% 2 === 0){
            sum += parseInt(numeritos[i])
        }
    }
console.log(sum);
}

NumerosPares()


