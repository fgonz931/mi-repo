console.clear();

//Asinconismo

function ejecutarEsto(){
    console.log(`Hola`);
}

setTimeout(() => {
    ejecutarEsto();
}, 2000);

