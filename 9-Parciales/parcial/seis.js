function Mostrar()
{

	var contador=0;
	var importe;
	var importeMayor;
	var importeMenor;

	while (contador<24)
	{
		contador++;
		importe=prompt("ingrese importe "+ contador);
		importe=parseInt(importe);

		while (importe<=0)
		{
			importe=prompt("ingrese importe mayor a 0:");

		}

		importe=parseInt(importe);

		if (contador==1)
		{
			importeMayor=importe;
			importeMenor=importe;
		}

		else if (importe>importeMayor)
		{
			importeMayor=importe

		}

		
		if (importe<importeMenor)
		{
			importeMenor=importe;
		}
	}

alert("el importe mayor es: "+importeMayor);
alert("el importe menor es: "+importeMenor);

}
