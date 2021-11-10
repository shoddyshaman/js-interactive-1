

========================
Counter & Theme Switcher
========================

Summary
=======

In this project, we'll introduce you to DOM manipulation by creating a small project. The basic HTML and CSS have been provided for you, and you will be adding in the JavaScript to make the interface interactive. The goal of this project is to create a simple counter interface that can use three different themes.

Note
====

During the lab exercise for today, students will be using text input fields. There isn't one in this demo. If you think your students need the example, feel free to show them how to get `input.value` and use it in JS. 

It could also be very helpful to show them a console log of `event` and/or `event.target` and show them what's happening with those.

Setup
=====

Fork and clone the repository and open the folder in your code editor.

Step 1
======

Summary
-------
In this step, we'll create our JavaScript file and connect it to our HTML.

Instructions
------------
- Create a new file called `index.js`.
- Add a `console.log('hello world')` so we can see if the script is running.
- Open `index.html`
- Inside the `<body>` tag, but after the `<main>` element, add a `<script>` tag to bring in your `index.js` file using the 'src' attribute.
- Open `index.html` in your web browser.
  - Open the console and look for the `hello world` console log from your JavaScript file. If it doesn't appear, check the file path in your `<script>` tag.


Step 2
======

Summary
-------

In this step, we'll start working on the JavaScript functions needed for the counter functionality in `index.js`

Instructions
------------

- Create a global variable called `count` with an initial value of `0`. We will update this global variable in all of our functions.
- Next, create a function called `increase` that increases the value of `count` by 1. For now, `console.log` the new value of count so you can see when the function runs.
  - could use count++, count+=1 or count = count + 1
- Follow the same pattern to create a function called `decrease` that decreases the value of `count` by 1 
  - could use count--, count-=1 or count = count - 1
- and `reset` that resets the value of `count` to 0.

Step 3
======

Summary
-------

In this step, we will create variables to hold our HTML buttons and add event listeners to run our JavaScript functions when the buttons are clicked. Using addEventListener is just one way that we can connect functions to HTML, we'll use another way later in this project. 

Instructions
------------
- In your HTML, find the `-`, `Reset`, and `+` buttons, and note their ids, that's what we'll use to select them in JS
- In your JS files, create variables called `minusBtn`, `resetBtn`, and `plusBtn` and use document.querySelector to select them by their ids 
- Add an event listener to `minusBtn` that will call `decrease` when that button is clicked
- Add an event listener to `resetBtn` that will call `reset` when that button is clicked
- Add an event listener to `plusBtn` that will call `increase` when that button is clicked
- With your console open, click the buttons to see if the function is running and the value of `count` is changing correctly.




Step 4
======

Summary
-------

In this step, we will update our JavaScript functions to update the content in the `h1` with the id of `counter` instead of displaying `count` in the console.

Instructions
------------

- In `index.js`, use `document.querySelector` to create a new variable called `counterText` that references the `h1` element with an id of `counter` from `index.html`
- In your `increase`, `decrease`, and `reset` functions, use the `textContent` property of the `counterText` variable to change the value that is displayed in the `h1` to be the new value of `count`.
- Remove your `console.log` in each function.



Step 5
======

Summary
-------

In this step, we will start working on the JavaScript functions needed to change the themes on the page. The themes' classes are already provided for you in `themes.css` and do not need to be changed. Instead, we just need to add the correct class name to the `body`, `main` and `button` elements.

Instructions
------------

- In `index.js`, create a function called `selectTheme` that takes in `event` as a parameter -- we'll be asking JS to run this when a `click` event occurs, and it will automatically know what that event is, and where it took place, so we'll be able to use event.target to make it so this function can work for multiple elements
- create a variable inside your function called `theme` whose value is event.target.textContent, we can then use `theme` to set the classNames of the elements on the page (note that the buttons' text matches the names of the provided css theme classes)
- Use `document.querySelector` to select the `body` element and change its `className` property to the `theme` variable.
  - `className` will replace a single className, if we used classList here, then we would just be adding each theme on top of each other instead of replacing, or we'd have to remove all the other classes each time
- Repeat this step for the `main` element.
- We will need to select all of the buttons in the `index.html` file.We can use `document.querySelectorAll` to select all of them and assign them to a variable called `buttons`. We will to use a `for` loop to change the `className` property for every `button` element in the buttons variable. Remember, when selecting elements with `document.querySelectorAll`, it returns a `NodeList` which is an array-like list.



Step 6
======

Summary
-------

In this final step, we will add event listeners to all of the theme buttons that will call `selectTheme` when the buttons are clicked 

Instructions
------------

- select all the theme buttons using `querySelectorAll` and their class `theme-buttons`, save them to a variable called `themeBtns`
- write a for loop that loops over the buttons, it should add a `click` event listener to each on that runs `selectTheme`