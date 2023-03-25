//modules??

// Objeto para representar las filas de la tabla
// cada objeto instanciado representa una fila
class taskData {

    constructor(name, state, typeOfTask, startDate, endDate, inChargeOf) {

      this.name = name;
      this.state = state;
      this.typeOfTask = typeOfTask;
      this.startDate = startDate;
      this.endDate = endDate;
      this.inChargeOf = inChargeOf;
    }

    getProperties(){
        return [this.name, this.state, this.typeOfTask, this.startDate, this.endDate, this.inChargeOf]
    }
  
}

// Arreglo para almacenar las filas, es decir, es una representación de la tabla.
// La variable Taskorig, guarda el estado inicial de la tabla para reiniciar los filtros.
var myTasks = [];
actualizarTabla();
const myTasksorig = myTasks;

// Función que captura los elementos actuales de la tabla y los guarda en en arreglo de objetos myTasks
function actualizarTabla(){
  myTasks = [];
  const allTableRows = document.querySelectorAll("tr");
  var myarray2 = [];
  for (let i=0; i < allTableRows.length-1 ;  i++) {
    let columns = [];
    columns = allTableRows[i+1].querySelectorAll("td");
    let auxArray = [];
    for(let j=0; j < columns.length; j++){
      auxArray.push(columns[j].innerHTML);
    }
    myTasks.push(new taskData());
    let j=0;
    for(let property1 in myTasks[i]){
      myTasks[i][property1] = auxArray[j];
      j++;
    }
  }
}
function imprimirTabla(){
  const allTableRows = document.querySelectorAll("tr");
  for (let i=0; i < allTableRows.length-1; i++) {
    let columns = [];
    columns = allTableRows[i+1].querySelectorAll("td");
    let auxArray = myTasks[i].getProperties();
    for(let j=0; j < columns.length; j++){
      columns[j].innerHTML = auxArray[j];
    }
  }
}


// Función que espera al click de sort.tarea y reordena la vista
document.getElementById("tareades").addEventListener('click', function(){
  actualizarTabla();
  myTasks.sort((a, b) => (a.name > b.name) ? 1 : -1);
  imprimirTabla();
  document.getElementById("indicadorFiltro").innerHTML =  '<button class="btn btn-primary ms-5">Tarea Desc</button>'; 
});

document.getElementById("tareaasc").addEventListener('click', function(){
  actualizarTabla();
  myTasks.sort((a, b) => (a.name < b.name) ? 1 : -1);
  imprimirTabla();
  document.getElementById("indicadorFiltro").innerHTML =  '<button class="btn btn-primary ms-5">Tarea Asc</button>'; 
});

// Función que espera al click de sort.estado y reordena la vista
// document.getElementById("tareades").addEventListener('click', function(){
//   actualizarTabla();
//   myTasks.sort((a, b) => (a.name > b.name) ? 1 : -1);
//   imprimirTabla();
//   document.getElementById("indicadorFiltro").innerHTML =  '<button class="btn btn-primary ms-5">Tarea Desc</button>'; 
// });

// document.getElementById("tareaasc").addEventListener('click', function(){
//   actualizarTabla();
//   myTasks.sort((a, b) => (a.name < b.name) ? 1 : -1);
//   imprimirTabla();
//   document.getElementById("indicadorFiltro").innerHTML =  '<button class="btn btn-primary ms-5">Tarea Asc</button>'; 
// });

console.log(typeof(myTasks[0]["state"]));




// funcion para deshacer y retornar a la vista original de la tabla
document.getElementById("deshacer").addEventListener('click', function(){
  actualizarTabla();
  myTasks = myTasksorig;
  imprimirTabla();
  document.getElementById("indicadorFiltro").innerHTML =  '<button class="btn btn-dark ms-5">Sin Filtro</button>'; 
});

