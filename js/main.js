console.log ("Hola mundo como estan")
var variable = true;
const constante =5;
console.log(constante);
variable = false;
console.log(variable);


//Operadores Aritmeticos

var Num1 = 15
var Num2 = 3
var vNom = "Juan Carlos"
var vApellido = "Osses Vidal"
console.log("Suma:" ,Num1+Num2)
console.log("Resta:" ,Num1-Num2)
console.log("Division:" ,Num1/Num2)
console.log("Multiplicacion:" +Num1*Num2)
console.log("Nombre Completo:" +vNom+""+vApellido)
console.log("Resto de Division:" ,Num1%2)

//Sentencias Condicionales
if(Num1%2==0){
    console.log("El:" ,Num1,"Es Mayor que",Num2);
}
else{
    console.log("El",Num1,"Es Numero Impar");
};

//Operadores Comparecion
var vGlosa="El Numero:"






//Funciones
function Suma(){
    var vfNum1 = document.getElementById("vNum1").value;
    var vfNum2 = document.getElementById("vNum2").value;

    if(vfNum1===""||vfNum2===""){
        alert("debe Completar todo los Datos...");
    }
    else{
        var vfSuma=parseInt(vfNum1)+parseInt(vfNum2);
        document.getElementById("vResultado").value=vfSuma;
    }
    



    }
