/**
 * En javascript hay 3 formas de declarar variables
 * ! Existe una forma que ya no se recomienda su uso 
 * ! var
 * Al proceso de crear una variable y darle un valor se le llama asignación
 * A las variables que pueden ser reasignadas (pueden cambiar en un futuro el valor que tienen) se declaran:
 * ? let nombreVariable = valor;
 * 
 * * el operador = se conoce como operador de asignación
 * Una vez creada una variable podemos usarla en otros lugares del código utilizando su nombre, las variables al ser utilizadas no van entre comillas.
 * 
 * Las variables que no pueden ser reasignadas (su valor no puede cambiar) se declaran:
 * ? const nombreVariable = valor;
 * 
 * Notas:
 * Palabras reservadas: Son palabras que utiliza el lenguaje de programación y si intentamos usarlas en otros lados pueden generar errores.
 */

let nombre = "Ariane"; //variable tipo String
console.log(nombre);

const fechaNacimiento = 1999; // Var tipo numérico
console.log(fechaNacimiento);

/**Reasignar una variable (cambiando el valor que tiene)
 * Cuando reasignamos una variable (ya creada)
 * ! Ya no es necesario poner let
*/

nombre = "Natalia";
let name = "Ariane";
console.log(nombre);

/**Sección de prueba
 * Marca type error porque no se puede cambiar el valor a una variable constante.
 * fechaNacimiento = 1998;
*/

/** Concatenación
 * Nos permite pegar el valor de una variable a un texto.
 */

console.log("Hola soy " + nombre + " y mi hermana se llama " + name + ", nací en el año " + fechaNacimiento);

