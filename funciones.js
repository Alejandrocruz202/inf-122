const colores=['rojo' , 'azul' , 'verde', 1];

var encontrar=colores.find(function (elemento){
    return elemento==="amarillo";
});
console.log(encontrar);
var elemento=colores.findIndex(function (elemento){
    return elemento===1;
});
console.log(encontrar);
var boleano=colores.find(function (elemento){
    return elemento===false;
});
console.log(boleano);

//funcion----------------------------------------------------------------------------------------------------------------------
function saludar(nombre){
    return "hola " +nombre + " !"
} 
const mensaje= saludar("tatiana");
function cont(x,y){
    return x+ " + "+ y +' = ' +(x+y)
}
const num= cont(5,2);

function (){
    return
}
const algo
console.log(algo)