let to=document.getElementById("to");
let text=document.querySelector(".text");

function Add(){
    if(to.value==""){
        alert("please Enter task")
    
    }else {
    let newEle = document.createElement("ul");
    newEle.innerHTML= `${to.value} <i class="fa-solid fa-trash"></i>`;
    text.appendChild(newEle);
    to.value="";
    newEle.querySelector("i").addEventListener("click", remove);
    function remove(){
        newEle.remove()
    }
    }
}
