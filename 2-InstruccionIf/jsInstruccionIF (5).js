function Mostrar()
{
//tomo la edad  

var edad;
edad= document.getElementById('edad').value;


/*
if (!(edad>12 && edad<18))

{
	alert("no eres adolescente");
}

*/

//esta es la forma más adecuada de acerlo con un or
if (edad<13 || edad>17)

{
	alert("No eres adolescente");
}

}//FIN DE LA FUNCIÓN