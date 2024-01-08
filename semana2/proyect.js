
function AgregarTarea() {
    var tarea=document.getElementById("tarea").value;
    var NuevoItem=document.createElement("li");
    NuevoItem.textContent=tarea;
    document.getElementById("TList").appendChild(NuevoItem);
    document.getElementById("tarea").value="";
    
}