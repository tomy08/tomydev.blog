---
title: '5 elementos de HTML que no conocías'
date: 2023-09-30
tags: ['html']
layout: '../../../layouts/Layout.astro'
---

Muchas veces nos encontramos con que queremos hacer un modal, un popover, un acordion, o una busqueda con autocompletado, y como muchas veces despreciamos el poder de HTML, nos vamos directo a usar JavaScript, pero en este post te voy a mostrar 5 elementos de HTML que te pueden ayudar a resolver estos problemas.

## 1. `<details>`

La etiqueta `<details>` se utiliza para crear un elemento de detalles que puede contener información oculta que el usuario puede mostrar u ocultar. Es utilizado para crear secciones desplegables como un acordeón.

Te muestro un ejemplo básico sobre como usarlo:

```html
<details>
	<summary>Click para ver más detalles</summary>
	<p>
		Aquí puedes colocar información adicional que estará oculta inicialmente.
	</p>
</details>
```

En el ejemplo, `<summary>` es el texto que se muestra inicialmente, y cuando el usuario hace clic, se muestra el contenido dentro de `<p>`.

Este es el resultado:

<details>
	<summary>Click para ver más detalles</summary>
	<p>
		Aquí puedes colocar información adicional que estará oculta inicialmente.
	</p>
</details>

## 2. `<meter>` y `<progress>`

Aunque estos dos elementos son muy similares, tienen pequeñas diferencias. Ambos se utilizan para mostrar el progreso de algo. `<meter>` se utiliza para mostrar el progreso de un valor numérico, mientras que `<progress>` se utiliza para mostrar el progreso de una tarea.

```html
<meter value="0.6">60%</meter>

<progress value="0.6">60%</progress>
```

## 3. `<dialog>`

La etiqueta `<dialog>` se utiliza para crear un cuadro de diálogo o una ventana emergente. Este elemento se superpone de todos los demas por lo que el usuario no puede interactuar con la página mientras el cuadro de diálogo está abierto.

```html
<dialog>
	<p>Este es un cuadro de diálogo</p>
</dialog>
```

Para mostrar el cuadro de diálogo, debes usar el método `showModal()` en JavaScript.

Aca te dejo un ejemplo de como usarlo:

```html
<dialog>
	<p>Este es un cuadro de diálogo</p>
	<button id="cerrar-dialogo">Cerrar Diálogo</button>
</dialog>

<button id="abrir-dialogo">Abrir Diálogo</button>

<script>
	const dialogo = document.querySelector('dialog')
	const abrirBoton = document.getElementById('abrir-dialogo')
	const cerrarBoton = document.getElementById('cerrar-dialogo')

	abrirBoton.addEventListener('click', () => {
		dialogo.showModal()
	})

	cerrarBoton.addEventListener('click', () => {
		dialogo.close()
	})
</script>
```

Este es el resultado:

<dialog class="w-1/2 p-4 bg-white rounded-lg shadow-lg">
    <span class="text-xl font-semibold text-gray-800 !p-0">Este es un cuadro de diálogo personalizado</span>
    <p class="text-gray-700 !p-0">Aquí puedes agregar tu contenido personalizado.</p>
    <div class="mt-2">
        <button id="cerrar-dialogo" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Cerrar Diálogo</button>
    </div>
</dialog>

<button id="abrir-dialogo" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Abrir Diálogo</button>

<script>
    const dialogo = document.querySelector('dialog');
    const abrirBoton = document.getElementById('abrir-dialogo');
    const cerrarBoton = document.getElementById('cerrar-dialogo');

    // Abre el cuadro de diálogo cuando se hace clic en "Abrir Diálogo"
    abrirBoton.addEventListener('click', () => {
        dialogo.showModal();
    });

    // Cierra el cuadro de diálogo cuando se hace clic en "Cerrar Diálogo"
    cerrarBoton.addEventListener('click', () => {
        dialogo.close();
    });
</script>

## 4. `popover`

Es similar a la etiqueta `<dialog>`, pero este deja al usuario interactuar con la página mientras el cuadro de diálogo está abierto.

```html
<button popovertarget="info-popover" popovertargetaction="show">
	Abrir popover
</button>

<article id="info-popover" popover="auto">
	<h2>Este es un popover personalizado</h2>
	<p>Aquí puedes agregar tu contenido personalizado.</p>
	<button popovertarget="info-popover" popovertargetaction="hide">Close</button>
</article>
```

En este caso, se utiliza el atributo `popovertarget` para definir el nombre del popover, y el atributo `popovertargetaction` para definir la acción que se realizará.

Este es el resultado:

<button popovertarget="info-popover" popovertargetaction="show" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
	Abrir popover
</button>

<article id="info-popover" popover="auto"  class="w-1/2 p-4 bg-white rounded-lg shadow-lg">
	<span class="text-xl font-semibold text-gray-800 !p-0">Este es un popover personalizado</span>
	<p class="text-gray-700 !p-0">Aquí puedes agregar tu contenido personalizado.</p>
	<div class="mt-2">
        <button class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" popovertarget="info-popover" popovertargetaction="hide">Cerrar</button>
    </div>
</article>

## 5. `<datalist>`

El elemento `<datalist>` se utiliza para crear una lista de opciones para un elemento `<input>`. Es similar a un `<select>` pero con la diferencia de que el usuario puede escribir cualquier valor en el campo de entrada.

```html
<label for="programming-language"
	>Selecciona un lenguaje de programación:</label
>
<input
	list="programming-languages"
	id="programming-language"
	name="programming-language"
/>

<datalist id="programming-languages">
	<option value="JavaScript"></option>
	<option value="Python"></option>
	<option value="Java"></option>
	<option value="C++"></option>
	<option value="Ruby"></option>
</datalist>
```

Este es el resultado:

<datalist id="programming-languages">
        <option value="JavaScript"></option>
        <option value="Python"></option>
        <option value="Java"></option>
        <option value="C++"></option>
        <option value="Ruby"></option>
</datalist>

<div class="py-4">
    <label for="programming-language" class="block font-bold mb-2">Selecciona un lenguaje de programación:</label>
    <input list="programming-languages" id="programming-language" name="programming-language" class="border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"> 
</div>
