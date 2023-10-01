---
title: "5 HTML elements that you didn't know"
date: 2023-09-30
tags: ['html']
layout: '../../../layouts/Layout.astro'
---

Lots of times we find ourselves wanting to make a modal, a popover, an accordion, or a search with autocomplete. Often due to underestimating the capabilities of HTML, we immediately resort to using JavaScript. However in this post I'll show you 5 HTML elements that can help you solve these problems.

## 1. `<details>`

The `<details>` tag is used to create a details element that can contain hidden information that the user can show or hide. It is used to create dropdown sections like an accordion.

I'll show you a basic example of how to use it:

```html
<details>
	<summary>Click to see more details</summary>
	<p>
		Here you can place additional information that will be hidden initially.
	</p>
</details>
```

In this example, `summary` is the text that is initially displayed, and when the user click, it shows the content inside `<p>` element.

This is the result:

<details>
	<summary>Click to see more details</summary>
	<p>
		Here you can place additional information that will be hidden initially.
	</p>
</details>

## 2. `<meter>` and `<progress>`

However these two elements are very similar, they have small differences. Both are used to show the progress of something. `<meter>` is used to show the progress of a numeric value, while `<progress>` is used to show the progress of a task.

```html
<meter value="0.6">60%</meter>

<progress value="0.6">60%</progress>
```

## 3. `<dialog>`

The `<dialog>` tag is used to create a dialog box or a popup window. This element is superimposed on all others so that the user cannot interact with the page while the dialog box is open.

```html
<dialog>
	<p>This is a dialog box</p>
</dialog>
```

To show the dialog box, you must use the `showModal()` method in JavaScript.

Here I leave you an example of how to use it:

```html
<dialog>
	<p>This is a dialog box</p>
	<button id="cerrar-dialogo">Close dialog</button>
</dialog>

<button id="abrir-dialogo">Open dialog</button>

<script>
	const dialog = document.querySelector('dialog')
	const openDialog = document.getElementById('abrir-dialog')
	const closeDialog = document.getElementById('cerrar-dialog')

	// Abre el cuadro de diálogo cuando se hace clic en "Abrir Diálogo"
	openDialog.addEventListener('click', () => {
		dialog.showModal()
	})

	// Cierra el cuadro de diálogo cuando se hace clic en "Cerrar Diálogo"
	closeDialog.addEventListener('click', () => {
		dialog.close()
	})
</script>
```

This is the result:

<dialog class="w-1/2 p-4 bg-white rounded-lg shadow-lg">
    <span class="text-xl font-semibold text-gray-800 !p-0">This is a custom dialog box</span>
    <p class="text-gray-700 !p-0">You can add your custom content here.</p>
    <div class="mt-2">
        <button id="close-dialog" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Close Dialog</button>
    </div>
</dialog>

<button id="open-dialog" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Open Dialog</button>

<script>
    const dialog = document.querySelector('dialog');
    const openButton = document.getElementById('open-dialog');
    const closeButton = document.getElementById('close-dialog');

    openButton.addEventListener('click', () => {
        dialog.showModal();
    });

    closeButton.addEventListener('click', () => {
        dialog.close();
    });
</script>

## 4. Popover

The `popover` attribute is used to create a popover. It is similar to the `<dialog>` tag, but this one allows the user to interact with the page while the dialog box is open.

```html
<button popovertarget="info-popover" popovertargetaction="show">
	Open Popover
</button>

<article id="info-popover" popover="auto">
	<h2>This is a custom popover</h2>
	<p>You can add your custom content here.</p>
	<button popovertarget="info-popover" popovertargetaction="hide">Close</button>
</article>
```

In this case, the `popovertarget` attribute is used to define the name of the popover, and the `popovertargetaction` attribute is used to define the action that will be make.

This is the result:

<button popovertarget="info-popover" popovertargetaction="show" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
	Open popover
</button>

<article id="info-popover" popover="auto"  class="w-1/2 p-4 bg-white rounded-lg shadow-lg">
	<span class="text-xl font-semibold text-gray-800 !p-0">This is a custom popover</span>
	<p class="text-gray-700 !p-0">You can add your custom content here.</p>
	<div class="mt-2">
        <button class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" popovertarget="info-popover" popovertargetaction="hide">Close</button>
    </div>
</article>

## 5. `<datalist>`

The `<datalist>` element is used to create a list of options for an `<input>` element. It is similar to a `<select>` but with the difference that the user can write any value in the input field.

```html
<label for="programming-language">Select a programming language:</label>
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

This is the result:

<datalist id="programming-languages">
        <option value="JavaScript"></option>
        <option value="Python"></option>
        <option value="Java"></option>
        <option value="C++"></option>
        <option value="Ruby"></option>
</datalist>

<div class="py-4">
    <label for="programming-language" class="block font-bold mb-2">Select a programming language:</label>
    <input list="programming-languages" id="programming-language" name="programming-language" class="border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"> 
</div>
