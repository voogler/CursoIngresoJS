function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var aleatorio;
//genera entre 1 y 10, es entre 0 y 9 pero con mas uno es lo anteriorimente dicho.
aleatorio=Math.floor(Math.random()*(9)+1);

if(aleatorio==9 || aleatorio==10)

	{
		alert("EXCELENTE "+ aleatorio);	
	}
else

	{

		if (aleatorio>=4 && aleatorio<=8)

		{
			alert("APROBÓ "+aleatorio);
		}

		else

		{
			alert("Vamos, la proxima se puede "+aleatorio);
		}	

	}
}//FIN DE LA FUNCIÓN