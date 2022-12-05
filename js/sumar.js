

function Sumar(){
    //alert("entro a la funcion sumar");
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    let resultado = parseInt(numero1) + parseInt(numero2); 
    //alert("el resultado es "+resultado);
    //captura el valor pero si no tengo el id osea por etiqueta
    let elementos_p = document.getElementsByTagName("p");

    let elementos_input = document.getElementsByTagName("input");

    let cantidad_parrafos = elementos_p.length;
    let cantidad_input = elementos_input.length;

    /*alert("la cantidad de parrafos son "+cantidad_parrafos);
    alert("la cantidad de input son "+cantidad_input);*/

    let numero3= elementos_input[0].value;
    let numero4= elementos_input[1].value;

    let resultado2 = parseInt(numero3) + parseInt(numero4); 
    alert("el resultado (sin id) "+resultado2);

    for(i=0; i<cantidad_parrafos; i++){
        alert("el parrafo "+i+" es "+elementos_p[i].innerHTML);
        if(i==2){
            elementos_p[i].innerHTML="Cambie el valor del parrafo 3";
        }
    }

    for(i=0; i<cantidad_input; i++){
        alert("el input "+i+" es "+elementos_input[i].value);
    }


}