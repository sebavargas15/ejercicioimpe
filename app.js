// function total a pagar
let litrosConsumidos;
let vehiculo;
conditional = true;

function totalPagar(vehiculo, litrosConsumidos){
    let aumento;
    vehiculo = vehiculo.toLowerCase();
    if(litrosConsumidos >= 0 && litrosConsumidos <= 25){
        aumento = 50;
    }
    if(litrosConsumidos >25){
        aumento = 25;
    }
    if(vehiculo == "coche"){
        return litrosConsumidos * 86 + aumento;
    }
    else if(vehiculo == "moto"){
        return litrosConsumidos * 70 + aumento;
    }
    else if(vehiculo == "autobus"){
        return litrosConsumidos * 55 + aumento;
    }
}


while(conditional){
    vehiculo = prompt("Ingrese el tipo de vehiculo que desea: \n 1. Coche \n 2. Moto \n 3. Autobus");
    if(vehiculo == 1){
        vehiculo = "Coche";
        conditional = false;
    }else if(vehiculo == 2){
        vehiculo = "Moto";
        conditional = false;
    }else if(vehiculo == 3){
        vehiculo = "Autobus";
        conditional = false;
    }else{
        alert("Ingrese una opcion valida");
    }
}
conditional = true;
while(conditional){
    litrosConsumidos = parseInt(prompt("Ingrese los litros consumidos: "));
    if(litrosConsumidos > 0){
        conditional = false;
    }else{
        alert("Ingrese una cantidad valida");
    }
}

console.log(totalPagar(vehiculo,litrosConsumidos));

alert("El total a pagar es: " + totalPagar(vehiculo,litrosConsumidos) + " pesos");
