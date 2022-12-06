

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

function Sumar2(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    if(numero1==''){
        document.getElementById("numero1").setAttribute("class", "form-control is-invalid");
        document.getElementById("validar_numero1").innerHTML="El numero 1 es obligatorio";
    }else{
        document.getElementById("numero1").setAttribute("class", "form-control is-valid");
        document.getElementById("validar_numero1").innerHTML="";
    }

    if(numero2==''){
        document.getElementById("numero2").setAttribute("class", "form-control is-invalid");
        document.getElementById("validar_numero2").innerHTML="El numero 2 es obligatorio";
    }else{
        document.getElementById("numero2").setAttribute("class", "form-control is-valid");
        document.getElementById("validar_numero2").innerHTML="";
    }
    if((numero1!='')&&(numero2!='')){
        let resultado = Sumar3(parseInt(numero1), parseInt(numero2));
        
        //crear una etiqueta o un nodo (etiqueta_h5)
        let etiqueta_h5 = document.createElement("h5");
        var contenido_h5= document.createTextNode("el resultado de la suma es "+resultado);
        etiqueta_h5.appendChild(contenido_h5);

        document.getElementById("caja_resultado").appendChild(etiqueta_h5);

    }
}

function Sumar3(numero1, numero2){
    let sumatoria = numero1 + numero2;
    return sumatoria;
}
