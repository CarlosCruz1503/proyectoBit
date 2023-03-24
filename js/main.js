const input = document.querySelector(".f-input-task");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector(".ul-todo");
const empty = document.querySelector(".empty");
const error = document.querySelector(".vacio");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text != "") {
    const li = document.createElement("li");
    li.setAttribute("id", `task${Math.floor(Math.random() * 1000)}`)
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    p.className += "to-do-work ";
    li.className += "space-li ";

    input.value = "";
    empty.style.display = "none";
  }else if (text == ""){
    error.classList.remove("vacio");
  }
});

if(empty.length=1){
  empty.style.display = "block";
}

input.addEventListener("focus", (e)=>{
  error.classList.add("vacio");
});


function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll(".space-li");

    console.log(items);

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}