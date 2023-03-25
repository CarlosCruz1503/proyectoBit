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

// Función que espera al click de sort.estado y reordena la vista WIP porque no se como hacerlo
// document.getElementById("estadodes").addEventListener('click', function(){
//   actualizarTabla();
//   myTasks.sort((a, b) => (a.state > b.state) ? 1 : -1);
//   imprimirTabla();
//   document.getElementById("indicadorFiltro").innerHTML =  '<button class="btn btn-primary ms-5">Tarea Desc</button>'; 
// });

// document.getElementById("estadoasc").addEventListener('click', function(){
//   actualizarTabla();
//   myTasks.sort((a, b) => (a.state < b.state) ? 1 : -1);
//   imprimirTabla();
//   document.getElementById("indicadorFiltro").innerHTML =  '<button class="btn btn-primary ms-5">Tarea Asc</button>'; 
// });

// Función que espera al click de sort.Tipo y reordena la vista
document.getElementById("tipodes").addEventListener('click', function(){
  actualizarTabla();
  myTasks.sort((a, b) => (a.typeOfTask > b.typeOfTask) ? 1 : -1);
  imprimirTabla();
  document.getElementById("indicadorFiltro").innerHTML =  '<button class="btn btn-primary ms-5">Tipo Desc</button>'; 
});

document.getElementById("tipoasc").addEventListener('click', function(){
  actualizarTabla();
  myTasks.sort((a, b) => (a.typeOfTask < b.typeOfTask) ? 1 : -1);
  imprimirTabla();
  document.getElementById("indicadorFiltro").innerHTML =  '<button class="btn btn-primary ms-5">Tipo Asc</button>'; 
});

// Función que espera al click de sort.Fechadeinicio y reordena la vista
document.getElementById("fechaindes").addEventListener('click', function(){
  actualizarTabla();
  myTasks.sort((a, b) => (a.startDate > b.startDate) ? 1 : -1);
  imprimirTabla();
  document.getElementById("indicadorFiltro").innerHTML =  '<button class="btn btn-primary ms-5">Fecha de Inicio Desc</button>'; 
});

document.getElementById("fechainasc").addEventListener('click', function(){
  actualizarTabla();
  myTasks.sort((a, b) => (a.startDate < b.startDate) ? 1 : -1);
  imprimirTabla();
  document.getElementById("indicadorFiltro").innerHTML =  '<button class="btn btn-primary ms-5">Fecha de Inicio Asc</button>'; 
});

// Función que espera al click de sort.Fechadeentrega y reordena la vista
document.getElementById("fechafides").addEventListener('click', function(){
  actualizarTabla();
  myTasks.sort((a, b) => (a.endDate > b.endDate) ? 1 : -1);
  imprimirTabla();
  document.getElementById("indicadorFiltro").innerHTML =  '<button class="btn btn-primary ms-5">Fecha de Entrega Desc</button>'; 
});

document.getElementById("fechafiasc").addEventListener('click', function(){
  actualizarTabla();
  myTasks.sort((a, b) => (a.endDate < b.endDate) ? 1 : -1);
  imprimirTabla();
  document.getElementById("indicadorFiltro").innerHTML =  '<button class="btn btn-primary ms-5">Fecha de Entrega Asc</button>'; 
});

// Función que espera al click de sort.Encargado y reordena la vista
document.getElementById("encardes").addEventListener('click', function(){
  actualizarTabla();
  myTasks.sort((a, b) => (a.inChargeOf > b.inChargeOf) ? 1 : -1);
  imprimirTabla();
  document.getElementById("indicadorFiltro").innerHTML =  '<button class="btn btn-primary ms-5">Encargado Desc</button>'; 
});

document.getElementById("encarasc").addEventListener('click', function(){
  actualizarTabla();
  myTasks.sort((a, b) => (a.inChargeOf < b.inChargeOf) ? 1 : -1);
  imprimirTabla();
  document.getElementById("indicadorFiltro").innerHTML =  '<button class="btn btn-primary ms-5">Encargado Asc</button>'; 
});




// funcion para deshacer y retornar a la vista original de la tabla
document.getElementById("deshacer").addEventListener('click', function(){
  actualizarTabla();
  myTasks = myTasksorig;
  imprimirTabla();
  document.getElementById("indicadorFiltro").innerHTML =  '<button class="btn btn-dark ms-5">Sin Filtro</button>'; 
});

