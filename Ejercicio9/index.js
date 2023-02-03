function CelsiusAFahrenheit(){
    const Celsius = parseInt(prompt ("Ingrese Grados Celsius para convertir a Fahrenheit"));
    const Fahrenheit = (Celsius*9/5) + 32;
    console.log(Fahrenheit);
}
CelsiusAFahrenheit();