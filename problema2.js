class cadena1{
    constructor(cad){
        this.cad= cad;
    } 
}
class CadenaMan{
    constructor(){
        this.listcad=[]
    }
    addProducts(cadena){
        this.listcad.push(cadena);
    }
    showCadena(){
        return this.listcad;
    }
/////////////////////////////////// __PROBLEMA 2____///////////////////////////////////////////////
//Escriba una función que invierta los caracteres entre paréntesis (posiblemente anidados) en la cadena de entrada
    invertir(cadena){
        var cadOrigen = cadena;
        var cantidadP = this.cantidadDeParent(cadena);
        while(cantidadP > 0){
            var invertido = "";
            var cad=this.invertirP(cadena);
            var inicio=this.iniParent(cadena);
            var final=this.finalParent(cadena);
            for(var i=cad.length -1; i>=0; i--){   
                invertido += cad[i];
            }
        for(var j=0; j<cadena.length;j++){
            if(j>inicio){
                var inicioC=cadena.substr(0,inicio);
            }
            else{
            }
            if(j>final){
                var finalC=cadena.substr(final+1);
            }
            else{
            }
        }
        if(cantidadP == 1 && cadOrigen[cadOrigen.length-1] == ')'){
            var cadena1 = inicioC+invertido;
        }
        else{
            var cadena1 = inicioC+invertido+finalC;
        }   
        cadena=cadena1;
        cantidadP--;
        } 
        return [cadOrigen,cadena1];////////////////////////////////
    }
    /////////////////////////////// funciones///////////////////////////////
    invertCadena(cadena){
        var regExp = /\(([^)]+)\)/; 
        var cadena = regExp.exec(cadena);
        return this.invertir(cadena);
    }
    cantidadDeParent(cadena){
       var dato=0;  
        for(var j=0;j<cadena.length;j++){
            if(cadena[j]=="("){
                dato=dato+1; 
            }
        }
        return dato;
    }
    finalParent(cadena){
        var dato1=0;
        for(var j=0;j<cadena.length;j++){
            if(cadena[j]==")"){
                var pos=j;
                return pos;
                break; 
            }
        }
    }
    iniParent(cadena){
        var pos=this.finalParent(cadena);
        for( var i=pos; i>=0; i--){
        if(cadena[i] =="("){
            var ini = i;
            return ini;
            break;
        }
    }
    }
    invertirP(cadena){
        var gt="";
        var inicio=this.iniParent(cadena);
        var final=this.finalParent(cadena);
        for(var i=0; i<cadena.length;i++){
            if(i==inicio ){
                var dato3=cadena.substr(inicio+1,final-inicio-1);
                return dato3;
            } 
        }
    }
    verficar(cadena){
        for (var i=0; i<cadena.length; i++){
            if(cadena[i] == "(" || cadena[i] == ")")
                return true;
        }
        return false;
    }
}