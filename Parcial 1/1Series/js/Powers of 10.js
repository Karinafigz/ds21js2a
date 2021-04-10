//2. Powers of 10
//   power10(n)
// -> n integer
// <- the n first elements of 10^n
//Gabriela Karina Figueroa G.
function potencia(exponente){
    let base = 10;
    let result = 1;
    for(let  i =1; i<=exponente; i++){
        result = result * base;
    
    document.write('Potencia:' + base + '('+ i +')' + '=' + result  + '<br>');
    }
    }
     potencia(prompt());
