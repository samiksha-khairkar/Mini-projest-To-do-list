let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.classList.add("delete");
    delbtn.innerText = "delete";

    ul.appendChild(item);
    item.appendChild(delbtn);
    inp.value = "";
});

ul.addEventListener("click",function(event) {
  if(event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;

    listItem.remove();
    console.log("deleted");
  }
});