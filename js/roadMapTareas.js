//modules??

// Objeto para representar las filas de la tabla
class taskData {

    constructor(name, state, typeOfTask, startDate, endDate, inChargeOf) {
      this._name = name;
      this._state = state;
      this._typeOfTask = typeOfTask;
      this._startDate = startDate;
      this._endDate = endDate;
      this._inChargeOf = inChargeOf;
    }
  
    get name() {
      return this._name;
    }
  
    set name(newValue) {
      this._name = newValue;
    }
    get state() {
      return this._state;
    }
  
    set state(newValue) {
      this._state = newValue;
    }
    get typeOfTask() {
      return this._typeOfTask;
    }
  
    set typeOfTask(newValue) {
      this._typeOfTask = newValue;
    }
    get startDate() {
      return this._startDate;
    }
  
    set startDate(newValue) {
      this._startDate = newValue;
    }

    get endDate() {
      return this._endDate;
    }
  
    set endDate(newValue) {
      this._endDate = newValue;
    }
    get inChargeOf() {
      return this._inChargeOf;
    }
  
    set inChargeOf(newValue) {
      this._inChargeOf = newValue;
    }

    getProperties(){
        return [this._name, this._state, this._typeOfTask, this._startDate, this._endDate, this._inChargeOf]
    }
  
  }

const allTableRows = document.querySelectorAll("tr");
var columns = [];
var myarray2 = [];
for (let i=0; i < 6; i++) {
  columns = allTableRows[i+1].querySelectorAll("td");
  console.log(columns[0].innerHTML);
  for(let j=0; j< 6; j++){
    myarray2[i][j] = columns[j].innerHTML;
  }
}
console.log(myarray2[0][1]);
// const myTask = new taskData(myarray2[0], myarray2[1], myarray2[2], myarray2[3], myarray2[4], myarray2[5]);
// // Recorrer las propiedades del objeto
// const myarray = myTask.getProperties();
// for(let i = 0; i< myarray.length ; i++){
//   console.log(myarray[0][1]);
// }


// Obteniendo filas y guardandolas en arrays
// const rowElement = document.getElementById("myRow");
// const columns = rowElement.querySelectorAll("td");
// var myarray2 = [];

// for (let i=0; i < columns.length; i++) {
//   myarray2[i] = columns[i].innerHTML;
// }
// const myTask = new taskData(myarray2[0], myarray2[1], myarray2[2], myarray2[3], myarray2[4], myarray2[5]);
// // Recorrer las propiedades del objeto
// const myarray = myTask.getProperties();
// for(let i = 0; i< myarray.length ; i++){
//     console.log(myarray[i]);
// }


// Seleccionar y modificar los items del html
// const rowElement = document.getElementById("myRow");
// const columns = rowElement.querySelectorAll("td");

// for (let i=0; i < columns.length; i++) {
//     columns[i].innerHTML = myarray[i];
// }




// Imprimir propiedades del objeto
// console.log(myObj.property1); // Output: "value1"
// myObj.property1 = "new value1";
// console.log(myObj.property1);


// Función para modificar elementos de la tabla

// var tdElement = document.getElementById("elementoPrueba");
// tdElement.innerHTML = "Hola Mundo"