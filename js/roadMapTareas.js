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
var myTasksorig = myTasks;

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
// Funcion para realizar sorts
function crearSort(elementid, asc, property, indicador){
  document.getElementById(elementid).addEventListener('click', function(){
    actualizarTabla();
    if(asc){
      myTasks.sort((a, b) => (a[property] < b[property]) ? 1 : -1);
    }else{
      myTasks.sort((a, b) => (a[property] > b[property]) ? 1 : -1);
    }
    imprimirTabla();
    document.getElementById("indicadorFiltro").innerHTML =  '<button class="btn btn-primary ms-5">'+indicador+'</button>'; 
  });
}

// Función que espera al click de sort.tarea y reordena la vista
crearSort("tareades", false, "name", "Tarea Desc");
crearSort("tareaasc", true, "name", "Tarea Asc");
// Función que espera al click de sort.Tipo y reordena la vista
crearSort("tipodes", false, "typeOfTask", "Tipo Desc");
crearSort("tipoasc", true, "typeOfTask", "Tipo Asc");
// Función que espera al click de sort.Fechadeinicio y reordena la vista
crearSort("fechaindes",false,"startDate", "Fecha de Inicio Desc");
crearSort("fechainasc",true,"startDate", "Fecha de Inicio Asc");
// Función que espera al click de sort.Fechadeentrega y reordena la vista
crearSort("fechafides",false,"endDate", "Fecha de Entrega Desc");
crearSort("fechafiasc",true,"endDate", "Fecha de Entrega Asc");
// Función que espera al click de sort.Encargado y reordena la vista
crearSort("encardes",false,"inChargeOf", "Encargado Desc");
crearSort("encarasc",true,"inChargeOf", "Encargado Asc");


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



// funcion para deshacer y retornar a la vista original de la tabla
document.getElementById("deshacer").addEventListener('click', function(){
  actualizarTabla();
  myTasks = myTasksorig;
  imprimirTabla();
  document.getElementById("indicadorFiltro").innerHTML =  '<button class="btn btn-dark ms-5">Sin Filtro</button>'; 
});

//Funcion para trigger modal y cambiar botones estado

function cambiarEstado(opcion, fila){
  let element = document.getElementById(opcion);
  let newElement = element.cloneNode(true);
  element.replaceWith(newElement);
  document.getElementById(opcion).addEventListener('click', function(){
    if(opcion==="opt1"){
      document.getElementById(fila).innerHTML =  '<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Completado</button>';
    }
    if(opcion==="opt2"){
      document.getElementById(fila).innerHTML =  '<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">En Progreso</button>';
    }
    if(opcion==="opt3"){
      document.getElementById(fila).innerHTML =  '<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Con Demora</button>';
    }
    if(opcion==="opt4"){
      document.getElementById(fila).innerHTML =  '<button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">Aplazado</button>';
    }
    if(opcion==="opt5"){
      document.getElementById(fila).innerHTML =  '<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Cancelado</button>';
    }
    if(opcion==="opt6"){
      document.getElementById(fila).innerHTML =  '<button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">No Iniciado</button>';
    }
    actualizarTabla();
    myTasksorig = myTasks;
    imprimirTabla();
  });
}

for(let i=1; i<myTasks.length+1; i++){
  document.getElementById("fila"+i).addEventListener('click', function(){
    cambiarEstado("opt1", "fila"+i);
    cambiarEstado("opt2", "fila"+i);
    cambiarEstado("opt3", "fila"+i);
    cambiarEstado("opt4", "fila"+i);
    cambiarEstado("opt5", "fila"+i);
    cambiarEstado("opt6", "fila"+i);
  });
}