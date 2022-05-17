//Funcion de errores
//Crear una funcion que recibe tres parametros chance, mensaje y resultado.
//chance: es un numero que indica el porcentaje que tiene esa funcion de arrojar un error.
//si chance = 20 entonces la funcion tiene 20% de posibilidades de disparar un error
//mensaje: el mensaje que tiene que tener el error que puede disparar la funcion
//resultado: es cualquier cosa, un numero, un texto, un objeto, etc. es lo que retorna la
//funcion si no arrojo un error
console.clear();

function funcionCatastrofica(chance, mensaje, resultado){
    let probabilidad = chance/100;
 //   console.log(`Probabilidad es: ${probabilidad}`);
    if (Math.random()<probabilidad) {
        throw new Error(mensaje);        
    }
    return resultado
}

try {
    let salida = funcionCatastrofica(50, "Error de la funcion", 5);
    console.log(`Resultado:   ${salida} `);
} catch (error) {
    console.log(error.message); //error.message es un metodo de error que recibe metodo(*msj*) del TROW
}