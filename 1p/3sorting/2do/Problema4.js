//4. sort - use JS Array.sort implementation
//Gabriela Karina Figueroa Guzmán

let nombres=[
    {name:'Veronica'},
    {name:'Camila'},
    {name:'Karina'},
    {name:'Diana'},
    {name:'Sara'},
    {name:'Yunuel'}];
 
  console.log(nombres.sort(function(p,n){
     if(p.name>n.name){
       return 1;
     }if(p.name<n.name){
       return -1;
     }
     return 0;
   }));
 