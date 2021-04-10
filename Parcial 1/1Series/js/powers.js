//2. Powers of 2 
//   power2(n)
// -> n integer
// <- the n first elements of 2^n

//Gabriela Karina Figueroa G.
function potencia(exponente){
    let base = 2;
    let result = 1;
    for(let  i =1; i<=exponente; i++){
        result = result * base;  
    document.write('Potencia:' + base + '('+ i +')' + '=' + result  + '<br>');
    }
    }
     potencia(prompt());

