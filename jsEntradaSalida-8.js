/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	
var dividendo;
var divisor;
var resto;

	dividendo=document.getElementById('numeroDividendo').value;
	divisor=document.getElementById('numeroDivisor').value;

	dividendo=parseInt(dividendo);
	dicisor=parseInt(divisor);

	resto=dividendo%divisor;

		alert("el resto es "+resto);

}
