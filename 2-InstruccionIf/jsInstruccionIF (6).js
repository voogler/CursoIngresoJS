function Mostrar()
{
//tomo la edad  
var edad;

edad=document.getElementById('edad').value;


/*
if (edad>17)
{
	alert("eres mayor de edad");
}

	if (edad>12 && edad<18)
	{
		alert("eres adolescente");

	}

	if (edad<13)
		{
		alert("eres un niño");
		}
*/
	

//ahora con if anidado

if (edad>17)

	{
		alert("eres mayor de edad");	
	}

else
	{
		if (edad>12 && edad<18)
		{	
			alert("eres adolescente");
		}	
		else
		{
			alert("eres un niño");
		}
	}


}//FIN DE LA FUNCIÓN