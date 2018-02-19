function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var aleatorio;
		
	aleatorio=Math.floor(Math.random()*(10)+1);

	if(aleatorio>8)
	{
		alert("EXCELENTE "+aleatorio);
	}
	else
	{
		if(aleatorio<4)
		{
			alert("Vamos, la proxima se puede "+aleatorio);
		}
		else
		{
			alert("APROBÓ "+aleatorio);
		}
	}


}//FIN DE LA FUNCIÓN