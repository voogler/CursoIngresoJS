function Mostrar()
{
	var importe;
	var promedio;

	importe=prompt("Ingrese importe");
	importe=parseInt(importe);
	promedio=(importe*21)/100;
	importe=importe+promedio;
	document.getElementById('importeFinal').value=importe;
  
}
