function Mostrar()
{
	var nota;
	var sexo;
	var contadorNotas=0;
	var contadorM=0;
	var notaMinima;
	var promedio;
	var acumuladorNotas=0;


	while(contadorNotas<5)
	{
		contadorNotas++;

		

		sexo=prompt("Ingrese sexo: f o m");

		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("¡Error! Ingrese sexo: f o m");
		}

		nota=prompt("Ingrese nota.");

		while(nota>10 || nota<0)
		{
			nota=prompt("¡Error! Ingrese nota entre 0 y 10.");
		}

		nota=parseInt(nota);

		if(sexo=="m" && nota>=6)
		{
			contadorM++;
		}

		
		if(contadorNotas==1)
		{
			notaMinima=nota;
		}
		else if(notaMinima>nota)
		{
			notaMinima=nota;
		}

		acumuladorNotas+=nota;

	}

	promedio=acumuladorNotas/contadorNotas;

	document.write("El promedio de las notas totales es: "+promedio+"<br>");
	document.write("La nota mas baja es: "+notaMinima+"<br>");
	document.write("La cantidad de varones que su nota fue mayor o igual a 6 es de: "+contadorM+" varones.");

}
