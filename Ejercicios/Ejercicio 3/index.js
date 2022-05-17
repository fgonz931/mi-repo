
//En nuestro juego online tenemos un array de usuarios sospechosos que están usando un item que fue prohibido, obtener la lista
//de IDs de usuarios que en su inventario tengan dicho item. El item prohibido se llama "Katana de fuego".
console.clear();
const jugadores = [
 { ID: "1", clase: "mago", nivel: 35, inventario:
 ["Manzana", "Poción de maná", "Vara mágica"] },
 { ID: "2", clase: "ladron", nivel: 65, inventario:
 ["Daga", "Katana de fuego", "Poción de vida"] },
 { ID: "4", clase: "curandero", nivel: 73, inventario:
 ["Vara mágica", "Armadura ligera"] },
 { ID: "3", clase: "espadachin", nivel: 36, inventario:
 ["Casco de hierro", "Katana de fuego", "Pocíón de velocidad"] },
 { ID: "5", clase: "mago", nivel: 26, inventario:
 ["Carta de PecoPeco", "Oridecon", "Poción de concentración"] },
]


/*productos.forEach((element) => {element.controlStock=haystock(element)}) */
function EsKatana(element) {
  return element === "Katana de fuego"
 }


function buscacheat (element1, element2){
  element1.forEach(element1 => { 
    if (element1.inventario.find(EsKatana) ){
      element2.push(element1.ID)
    }
  }
  )
}

const idban =[];

buscacheat(jugadores, idban);

console.log(idban);