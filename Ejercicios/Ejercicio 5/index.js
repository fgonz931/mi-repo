console.clear();

//Crear una funcion llamada pedirInformacion que no recibe parametros y
//que devuelve el siguiente objeto que corresponde a los datos de un usuario: let persona =
//{ id: 19310, nombre: "Bautista", apellido: "Di Santo" }


let persona = { id: 19310, nombre: "Bautista", apellido: "Di Santo" }

function pedirInformacion(){
  let aux = Math.random();
  console.log(`La variable aux es = ${aux}`);
  if(aux<0.1){
    throw new Error('AlienError')
  }else{
    if(aux<0.28){
    throw new Error('InternalError')
    }else{
      if (aux<0.53) {
        throw new Error('NetworkError')
      }else{
        return persona;
      }
    }
  }
}

try {
  let resultado = pedirInformacion();
  console.log(resultado);
} catch (error) {
  console.log(error.message);
}

//25% de posibilidades de disparar un error por desconexion de internet, el nombre del error es 'NetworkError'
//18% de posibilidades de disparar un error por error del servidor, el nombre del error es 'InternalError'
//10% de posibilidades de disparar un error por una anomalia, el nombre del error es 'AlienError'


//console.log(`Resultado: 
//${salida} `);