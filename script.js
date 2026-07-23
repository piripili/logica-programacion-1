// Solicitar números al usuario
let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let num3 = Number(prompt("Ingresa el tercer número:"));

// Validar que sean números
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Error: Debes ingresar solo números.");
    document.getElementById("resultado").innerText = "Error: Debes ingresar solo números.";
} else {
    // Guardar en arreglo
    let numeros = [num1, num2, num3];

    // Ordenar de mayor a menor
    let mayorMenor = [...numeros].sort((a, b) => b - a);
    console.log("De mayor a menor:", mayorMenor);
    document.getElementById("resultado").innerHTML += "De mayor a menor: " + mayorMenor.join(", ") + "<br>";

    // Ordenar de menor a mayor
    let menorMayor = [...numeros].sort((a, b) => a - b);
    console.log("De menor a mayor:", menorMayor);
    document.getElementById("resultado").innerHTML += "De menor a mayor: " + menorMayor.join(", ") + "<br>";

    // Verificar si son iguales
    if (num1 === num2 && num2 === num3) {
        console.log("Los números son iguales.");
        document.getElementById("resultado").innerHTML += "Los números son iguales.";
    }
}
