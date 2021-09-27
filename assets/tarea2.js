
/* 3) Calcular el numero de pulsaciones que debe tener una persona por cada 10 segundos
de ejercicio aerobico; la formula que se aplica cuando el sexo es femenino es:
num. pulsaciones = (220 - edad)/10
y si el sexo es masculino:
num. pulsaciones = (210 - edad)/10 */

let sexo = prompt('introduse tu sexo');
let edad = parseInt(prompt('cual es el tu edad?'));
let Numerodepulsaciones=0;

switch(sexo){
   case 'maculino':
       console.log(`tu sexo es ${sexo} y tu edad es ${edad} por lo tanto tu pulsaciones por cada 10 segundos de ejecicio es:`);
       Numerodepulsaciones=(210-edad)/10;
       break;
   case 'femenino':
       console.log(`tu sexo es ${sexo} y tu edad es ${edad} por lo tanto tu pulsaciones por cada 10 segundos de ejercicio es:`);
       Numerodepulsaciones= (220-edad)/10;  
       break;
   default: 
       console.log(`introduce bien tu sexo (masculino o femenino) sin mayusculas por favor`);
}
console.log(Numerodepulsaciones); 





/*12) Una tienda de helado ofrece un descuento por compra a sus clientes con membresía 
dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C.
Los descuentos son los siguientes:

Costo del helado $70
Tipo A 10% de descuento
Tipo B 15% de descuento
Tipo C 20% de descuento */

let helados=parseInt(prompt('¿cuantos helados compraste?'));
let membresia= prompt('¿que membresia tienes?');
let descuento;
let total=0;
switch (membresia){
  case 'Tipo A':
    console.log(`tu membresia es ${membresia} y tienes un descuento de 10%`);
    descuento=(helados*70)*.1 ;
    total= (helados*70) - descuento ;
    break;
  case 'Tipo B':
    console.log(`tu membresia es ${membresia} y tienes un descuento de 15%`);
    descuento=(helados*70)*.15 ;
    total= (helados*70) - descuento ;
    break;
  case 'Tipo C':
    console.log(`tu membresia es ${membresia} y tienes un descuento de 20%`);
    descuento=(helados*70)*.2;
    total= (helados*70) - descuento ;
    break;   

  default: 
    console.log('La membresia no existe, solo existe membresia (Tipo A,B,C)');
}
console.log(total);




