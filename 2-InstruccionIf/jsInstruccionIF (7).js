function Mostrar()
{
//tomo la edad  

var edad;
var estadoCivil;

edad=document.getElementById('edad').value;
estadoCivil=document.getElementById('estadoCivil').value;


/*

if ((edad<18 && estadoCivil=="Casado")||(edad<18&&estadoCivil=="Divorciado"))

	{
		alert("Es muy pequeño para no ser soltero");		
	}

*/

/*
if (edad<18 && estadoCivil!="soltero")

	{
		alert("Es muy pequeño para no ser soltero");		
	}
*/


if (edad<18 && estadoCivil=="Casado")

	{
		alert("Es muy pequeño para no ser soltero");
	}

else

	{
		if (edad<18 && estadoCivil=="Divorciado")	

		{
			alert("Es muy pequeño para no ser soltero");
		}	
	}

}//FIN DE LA FUNCIÓN