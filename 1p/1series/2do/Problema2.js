//Powers of 2 
//Gabriela Karina Figueroa G. 2A
function potencia(n){
    let b= 2,r= 1;
    for(let  i =1; i<=n; i++){
        r = r * b;  
    document.write('La potencia:' + b +'^' + i  + '=' + r  + '<br>');
    }
    }
potencia(prompt());