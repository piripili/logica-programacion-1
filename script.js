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

    // Mostrar orden inicial
    console.log("Orden inicial:", numeros.join(", "));
    document.getElementById("resultado").innerHTML += "Orden inicial: " + numeros.join(", ") + "<br>";

    // Ordenar de mayor a menor
    let mayorMenor = [...numeros].sort((a, b) => b - a);
    console.log("De mayor a menor:", mayorMenor.join(", "));
    document.getElementById("resultado").innerHTML += "De mayor a menor: " + mayorMenor.join(", ") + "<br>";

    // Ordenar de menor a mayor
    let menorMayor = [...numeros].sort((a, b) => a - b);
    console.log("De menor a mayor:", menorMayor.join(", "));
    document.getElementById("resultado").innerHTML += "De menor a mayor: " + menorMayor.join(", ") + "<br>";

    // Identificar menor, centro y mayor
    let menor = menorMayor[0];
    let centro = menorMayor[1];
    let mayor = menorMayor[2];

    console.log("Número menor:", menor);
    console.log("Número del centro:", centro);
    console.log("Número mayor:", mayor);

    document.getElementById("resultado").innerHTML += "Número menor: " + menor + "<br>";
    document.getElementById("resultado").innerHTML += "Número del centro: " + centro + "<br>";
    document.getElementById("resultado").innerHTML += "Número mayor: " + mayor + "<br>";

    // Verificar si son iguales
    if (num1 === num2 && num2 === num3) {
        console.log("Los números son iguales.");
        document.getElementById("resultado").innerHTML += "Los números son iguales.";
    }
}
