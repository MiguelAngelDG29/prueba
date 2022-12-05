let numero1=prompt("Ingrese numero 1");
let numero2=prompt("Ingrese numero 2");
//let sumatoria = parseInt(numero1) + parseInt(numero2);
sumar(numero1, numero2);

let nombre = "Martha";
let numero3 = 25.5;

let materias = ["Quimica", "Fisica", "Español", 45, false];

for(i=0; i<materias.length; i++){
    document.write("<br />Materia: "+materias[i]);
}

let suma2 = sumar2(numero1, numero2);
alert("suma2 es "+suma2);




function sumar(numero1, numero2){
    let sumatoria = parseInt(numero1) + parseInt(numero2);
    
    document.write("<br /><p style='text-align:center'>La suma es "+sumatoria+"</p>");
}

function sumar2(numero1, numero2){
    let sumatoria = parseInt(numero1) + parseInt(numero2);
    return sumatoria;    
}


