let input=document.querySelector("#input");
let list=document.querySelector(".container3");

function addtask(){
  if(input.value==''){
    alert("you need to enter a text");
  }else{
    let li=document.createElement("li");
    li.innerHTML=input.value;
    list.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);

  }
  input.value='';
  saving();

}
list.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  }
else if(e.target.tagName === "SPAN"){
  e.target.parentElement.remove();
}
saving();
});
function saving(){
  localStorage.setItem("data",list.innerHTML);
}
function loadTasks() {
  let savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    list.innerHTML = savedTasks;
  }
}

// Load tasks from localStorage when the page loads
window.addEventListener("load", loadTasks);