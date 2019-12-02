/****************************************
 * This is the set of JavaScript statements that we execute inside of the
 * console against the `index.html` file.
 ****************************************/

/*
 * Selecting elements.
 */

// Returns a single element. This is because we can't every have more than
// one element with the same id. Note that we don't include a '#' for the id
var article = document.getElementById('home-page');

// Returns a list of elements. This is because we can have a number
// of <section> elements on the page
var sections = article.getElementsByTagName('section');

// Also returns a list of elements that match the class name. This is because
// unlike the ids, we can have numerous instances of elements with the same
// class names. Note that we don't include a '.' for the class
var leads = document.getElementsByClassName('lead');

// Let's look at the text content of the .lead element
var lead = leads[0];
lead.textContent;

// Very flexible way of finding elements in the DOM. Returns first element found
var article = document.querySelector('#home-page');
var section = document.querySelector('section');
var lead = document.querySelector('.lead');

// Can get all matched results. This returns a list
var sections = document.querySelectorAll('section');

// Let's look at an individual node and see it's children and it's parent
var article = document.getElementById('home-page');

article.children;
article.parentElement;
article.nextElementSibling
article.firstElementChild;
article.lastElementChild;

let section = article.firstElementChild;

/*
 * Creating new elements
 */
 
// Create a new li to go in the nav
var li = document.createElement('li');

// Give it a class name
li.classList.add('last');


// Change its CSS
li.style.backgroundColor = 'pink';

// Create an anchor link to go in the new li
var a = document.createElement('a');

// Give is some text
a.textContent = "Four";

a.style.color = 'white';

// Insert the anchor link into the li
li.appendChild(a);


/* 
 * Modifying the DOM
 */

// Find the ul element
var uls = document.getElementsByTagName('ul');

var ul = uls[0];

// Insert the new li element into our ul
ul.appendChild(li);

// Let's try move it up to the top of the list
var firstLi = ul.getElementsByTagName('li');
ul.insertBefore(li, firstLi);

firstLi.classList.remove('active');
// Starting to get messy

/*
 * Updating a list of elements
 * - this is where it gets painful
 */
var lis = ul[0].getElementByTagName('li');
var ul = document.getElementsByTagName('ul');
var li;
for (var i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = 'pink';
}

// Wouldn't it be great if we could do something like  ...

ul.find('li').removeClass('active').addClass('inactive').css('background-color', 'pink');

// without having to write big for loops
