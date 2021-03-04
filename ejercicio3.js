 palindromo( palabr)
{
    var palabra=palabr;
    //pasamos a minuscula x=frase principal
    var x=palabra.toLowerCase();
    //convertimos en array
    var y=x.split("");
    //eliminamos espacios en blanco
    var z="";
    for (var i=0;i<y.length;i++){
    if (y[i]!=""){
    z=y[i];
    }
    }
    var n=z.split("");
    var m=z.split("").reverse();
    for (var i=0;i<n.length;i++){
    if(n[i]==m[i]){
    alert("Esto es un palíndromo")
    return (true);
    }
    else{
    alert("Esto no es un palíndromo")
    return(false);
    }
    }
    }