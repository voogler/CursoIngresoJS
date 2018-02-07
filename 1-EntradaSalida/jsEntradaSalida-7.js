/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var suma1;
	var suma2;
	var resultadosuma;

	suma1=document.getElementById('numeroUno').value;
	suma2=document.getElementById('numeroDos').value;

	suma1=parseInt(suma1);
	suma2=parseInt(suma2);

	resultadosuma=suma1+suma2;

	alert("la suma es "+resultadosuma);
}

function restar()
{

	var resta1;
	var resta2;
	var resultadoresta;

	resta1=document.getElementById('numeroUno').value;
	resta2=document.getElementById('numeroDos').value;

	resta1=parseInt(resta1);
	resta2=parseInt(resta2);

	resultadoresta=resta1-resta2;

	alert("la resta es "+resultadoresta);	
}

function multiplicar()
{ 
	var multiplicacion1;
	var multiplicacion2;
	var resultadomultiplicacion;

	multiplicacion1=document.getElementById('numeroUno').value;
	multiplicacion2=document.getElementById('numeroDos').value;

	multiplicacion1=parseInt(multiplicacion1);
	multiplicacion2=parseInt(multiplicacion2);

	resultadomultiplicacion=multiplicacion1*multiplicacion2;

	alert("la multiplicacion es "+resultadomultiplicacion);
}

function dividir()
{
	var div1;
	var div2;
	var resultadodiv;

	div1=document.getElementById('numeroUno').value;
	div2=document.getElementById('numeroDos').value;

	div1=parseInt(div1);
	div2=parseInt(div2);

	resultadodiv=div1/div2;

	alert("la division es "+resultadodiv);
}

