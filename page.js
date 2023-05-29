let inputFiled = document.getElementById("inputFiled");
let addbtn = document.getElementById("addbtn");
let toDoContainer = document.getElementById("toDoContainer");

addbtn.addEventListener("click", function () {
  const parayph = document.createElement("p");
  parayph.classList.toggle("parayph-styling");
  parayph.innerText = inputFiled.value;
  toDoContainer.appendChild(parayph);
  inputFiled.value = "";

  //  Add  "line-through"
  parayph.addEventListener("click", function () {
    parayph.style.textDecoration = "line-through";
  });

  //  REmove The Child
  parayph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(parayph);
  });
});
