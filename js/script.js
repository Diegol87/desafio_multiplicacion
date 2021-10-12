let num2 = parseInt(prompt("Ingrese el un número entre el 1 y el 20 (incluido ambos): "));


if(num2 >= 1 && num2 <= 20) {
    alert("¡El valor ingresao es correcto!")
    for(let i = 1; i <= num2; i++) {
        let resultado = i * num2;
        console.log(i + " x " + num2 + " = " + resultado);
    }
    for(let i = 1; i <= num2; i++) {
        let resultado = 1;
        for(let j = 1; j <= i; j++) {
            resultado = resultado * j;
        }
        console.log("Factorial de " + i + " es: " + resultado);
    }
} else {
    alert("El dato ingresado no es válido")
}


