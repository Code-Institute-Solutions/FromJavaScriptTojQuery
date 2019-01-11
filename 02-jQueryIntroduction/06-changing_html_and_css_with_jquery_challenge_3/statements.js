/**
 * Loading jQuery on a website and using it to manipulate the DOM
 */


 /**
  * eir.ie
  */
// Create a new script element
var script = document.createElement('script');

// Set the `src` attribute of the new script element
script.src = "//code.jquery.com/jquery-latest.min.js";

// Append the new script element to the head element of the page
document.head.appendChild(script);

// Find out the `font-family` of all paragraphs
$("p").css("font-family");

// Find out the `font-family` of all `h2` elements
$("h2").css("font-family");

// Change the text of each paragraph element to you name
$("p").text("Aaron");

 /**
  * Stack Overflow
  */
// Create a new script element
var script = document.createElement('script');

// Set the `src` attribute of the new script element
script.src = "//code.jquery.com/jquery-latest.min.js";

// Append the new script element to the head element of the page
document.head.appendChild(script);

// Change the `background-color` of all paragraph elements
$("p").css("background-color", "#000");

// Change the `font-family` of all paragraph elements
$("p").css("font-family", "Verdana");