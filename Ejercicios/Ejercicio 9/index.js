console.clear();

//Ejemplo

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