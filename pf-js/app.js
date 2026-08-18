/** 
 * *CREACIÓN DE UN PROMPT:
 * 1. Asignar su uso a una variable para luego usar el valor que ingresó el usuario.
 * 2. Usar el valor inmediatamente.
 * !Importante
 * 1. No se recomienda su uso en aplicaciones en producción (ya siendo usada por gente).
 * 2. Bloquea el código, el código que esté por debajo del prompt no se ejecutará hasta que el usuario ingrese algo.
 * 3. No se puede personalizar.
 * 4. Todo lo que ingresa mediante prompt siempre es un string.
 */

const edad = prompt ("Ingresa tu edad", 15); //el 15 es el valor por defecto que escribe la página.
const nombre = prompt ("Ingresa tu nombre de usuario", "usuario");
console.log(edad);
console.log(nombre);
alert("Hola, soy " + nombre + " y tengo " + edad + " años.")
//el comando alert imprime el mensaje en la pantalla, tiene las mismas características que prompt.

//? \n es un caracter para salto de línea

/**
 * EJERCICIO:
 * 1. Pedir un prompt para obtener una serie o pelicula favoritos.
 * 2.  Un prompt para obtener un personaje de esa serie, el favorito.
 * 3. Un prompt para obtener porque es el favorito.
 * 4. Enviar un mensaje que diga "En la serie x sale el personaje x y es mi favorito porque x."
 */

const serie = prompt ("Ingresa el nombre de tu película o serie favorita:");
const personaje = prompt ("Ingresa tu personaje favorito de la película o serie antes mencionada");
const explic = prompt ("Escribe por qué ese personaje es tu favorito");
alert("En la serie " + serie + " sale el personaje " + personaje + " y es mi favorito porque " + explic )

