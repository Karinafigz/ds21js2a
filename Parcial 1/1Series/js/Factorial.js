//3. Factorial
//   factorial(n)
// -> n integer
// <- the n first factorial elements
//Gabriela Karina Figueroa G.
let n=prompt('Ingresa el numero para su factorial');
let factorial=1;
let x=1;
while(x<=n){
factorial=factorial*x;
console.log('Factorial  de '+  x + '=' + factorial );
x++;
}
