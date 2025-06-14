const input = document.getElementById('input');
const task_list = document.getElementById('task-list');

const save = document.querySelector('.save');
save.onclick =()=>{
    if(input.value===''){
        alert("First Enter text in the box");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        task_list.appendChild(li);  // li will be displayed  under task_list
        let span=document.createElement("span");
        span.innerHTML=("\u00d7");
        li.appendChild(span);
    }
    input.value="";
    saveData();
};

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        save.click(); 
    }
    saveData();
});


task_list.addEventListener("click",function(e){
if(e.target.tagName==="LI") {
e.target.classList.toggle("checked");
saveData();
}
else if(e.target.tagName==="SPAN") {
e.target.parentElement.remove();
saveData();
}
}, false);


function saveData(){
    localStorage.setItem("data",task_list.innerHTML);
}
function showTask(){
    task_list.innerHTML=localStorage.getItem("data");
}

showTask();

