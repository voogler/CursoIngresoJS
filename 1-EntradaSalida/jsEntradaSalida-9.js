/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var importe;
	var porcentaje;
	var resultado;

	importe=document.getElementById('sueldo').value;
	importe=parseInt(importe);

	porcentaje=(10/100)*importe;
	resultado=porcentaje+importe;

		document.getElementById('resultado').value=resultado;

}
