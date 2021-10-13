const num2 = parseInt(prompt("Ingrese el un número entre el 1 y el 20 (incluido ambos): "));

const verificar = (numero) => {
    if(numero >= 1 && numero <= 20) {
        console.log("¡El valor ingresado es correcto!")
        for(let i = 1; i <= numero; i++) {
            let resultado = i * numero;
            respuesta = console.log(i + " x " + numero + " = " + resultado);
        }
        for(let i = 1; i <= numero; i++) {
            let resultado = 1;
            for(let j = 1; j <= i; j++) {
                resultado = resultado * j;
            }
            respuesta = console.log("Factorial de " + i + " es: " + resultado);
        }
    } else {
        console.log("El valor ingresado fuera de rango")
    }
}
verificar(num2)



