console.clear();

let lista = [{ id: 19310, nombre: "Bautista", },{ id: 90010, nombre: "Ema", },{ id: 00519, nombre: "Lucas", },{ id: 00000, nombre: "Meison", } ] 

function pedirUsuario(){
    let aux= Math.random();
    if (aux<0.25) {
        return (lista[0])
    } else {if (aux<0.50) {
        return (lista[1]);
    } else {if (aux<0.75) {
        return (lista[2]);
    }else{
        throw new Error('ForbiddenInformation')
    }}};
}

function pedirInformacion(){
    try {
        const resultado = pedirUsuario();
        console.log(resultado);
    }catch (error) {
        console.log(error.message);
        throw new Error('NetworkError');
    }
}

try {
    const salida = pedirInformacion();
} catch (error) {
    console.log(error.message);
}