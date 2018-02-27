function Mostrar()
{
	diaDelaSemana=prompt("ingrese un dia de la semana");
	switch (diaDelaSemana)
	{
		case "sabado":
		case "domingo":
		alert("es fin de semana");
		break;

		default:
		alert("a trabajar !!!");
	}

}
