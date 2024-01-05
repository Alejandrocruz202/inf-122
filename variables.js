//variables globales 
var nombre ="Alejandro";
console.log(nombre);
var apellido ="Cruz";
console.log(apellido);
var edad=30;
console.log(edad);
var sueldo=1.234;
console.log(sueldo);
var sw=true;
console.log(sw);
//variables de bloque 
let presupuesto=1000;
console.log(presupuesto);
let gastos=500;
console.log(gastos);
//constantes
const IVA= 13;
console.log(IVA);
const tipodeCambio=6.98;
console.log(tipodeCambio);
//estructuras de control
//if---------------------------------------------------------------------------------------------------------
var x=9
if (x%2==0){
    console.log(x+" es par");
}
else{
    console.log(x+" no es par");
}
//for*--------------------------------------------------------------------------------------------------------
for(let i=0;i<5;i++){
    console.log("ciclo: "+(i+1));
}
//ehile-------------------------------------------------------------------------------------------------------
let cont=0
while (cont < 3) {
    cont++;
    console.log(cont);
}
let cont2=10
while (cont2 >= 0) {
    console.log(cont2);
    cont2--;
}
let suma=5+5;
console.log(suma);
let resta=5-5
console.log(resta);
let multiplicacion= 5*5;
console.log(multiplicacion);
let divicion=5/5;
console.log(division);
let modulo=5%5;
console.log(modulo);

let mayor=5>4;
let menor=4<5;
let mayorIgual=5>=4;
let menorIgual=4<=5;
let igual=5==4
let diferente=5!=5;

let and =true && true;
let or =true || false;
let not= !true

let combinado=5-7*8/9+1
console.log(combinado);
// estructura de datos
const persona={
    nombre: "Carlos",
    edad: 25,
    ocupacion: "desarrollador",
};
const colores =[ "rojo", " verde ", " azul "];

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ocupacion);
console.log("mi nombre es "+persona.nombre+" y tengo "+persona.edad+" añitos");
//agregar atributo
persona["apellido"]="perez";
console.log(persona);
persona.nombre="Alejandro";
console.log(persona);
persona["ci"]=1234567;
console.log(persona)
persona.edad=21;
persona.ocupacion="garzon";

console.log(persona)
//arrays
console.log(colores);
console.log(colores.length);
console.log(colores[0]);
for(let j=0;j<colores.length;j++){
    console.log("el color "+colores[j]+" en la posicion "+j);
}


for(let j=0;j<colores.length-1;j++){
    if(colores[j]=="rojo"){
        console.log(j);
    }
}

colores.push("amarillo");
colores.push("cuatro");
colores.push("pacai");
colores.reverse();
console.log(colores);
colores.sort();
console.log(colores);
colores.push("Cian");
colores.push(37);
colores.push(73);
colores.push(137);
colores.push([5,6,8]);
