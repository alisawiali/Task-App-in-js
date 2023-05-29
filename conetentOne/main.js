const myInputBox = document.getElementById("input-box");
const myAdd = document.getElementById("btn");
const listContainer = document.getElementById("list-container");

//   onclcik auf Add button
myAdd.onclick = function () {
  if (myInputBox.value === "") {
    alert("Pleace you must write massge");
  } else {
    //    create li  element
    const li = document.createElement("li");
    li.innerHTML = myInputBox.value;
    listContainer.appendChild(li);
    //    ceeate span element
    const span = document.createElement("span");
    //    create icon
    span.innerHTML = " " + "\u00d7"; // Icon ====> X
    li.appendChild(span);
  }
  //  Empaty the Input
  myInputBox.value = "";
};

//  listContainer Element li / span
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "Li") {
      // toggle check id
      e.target.id.toggle("check");
    } else if (e.target.tagName === "SPAN") {
      // delete the parent
      e.target.parentElement.remove();
    }
  },
  false
);

//  localStorage
