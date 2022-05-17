//Reescribir la siguiente función tal que retorne una promesa que se cumpla luego de 3 segundos (usar setTimeout), devolviendo el
//mismo resultado que la función dada.
console.clear()





function dividirNumeros(dividendo, divisor) {   
        return new Promise ((resolve, reject)=> {
            if (divisor !== 0) {
                setTimeout(() => {
                    const aux = dividendo/divisor; 
                    resolve(aux);
                }, 5000);
            } else {
                reject(`El divisor debe ser distinto de 0`);
            }
})
}


async function Dividir() {
    try {
        const resultado = await dividirNumeros(10, 0);
        console.log(`El resultado de dividir ${10}/${0} es: ${resultado} `);
    } catch (error) {
        console.log(`Lo sentimos, ocurrio un error: ${error}`)
    }
}

Dividir();

/*
function sleep(milisegundos){
    return new Promise((resolve, reject) => {
        if (milisegundos < 5000){
            setTimeout(() => {
                resolve();
            }, milisegundos);
        }else {
            reject(`Tanto tiempo no. Dormilon`);
        }
    })
}
async function programa() {
    console.log(`Hola`);
    try {
        await sleep(6000);
    } catch (error) {
        return console.log(`Lo sentimos, ocurrio un error: ${error} `);
    }
       
    
    console.log(`chau`);
}

programa();
*/