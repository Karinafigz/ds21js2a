//1. object
//   attach(n)
// -> n random name
// <- random name added
//Gabriela Karina Figueroa Guzmán
//Gabriela Karina Figueroa Guzmán
let objeto = {name1: "Karina", apellido:"Figueroa", apellido2:'Guzmán'};

 
function valorO(o){
 let num=Math.floor(Math.random()*10);
 o.edad = num;
}

valorO(objeto);

