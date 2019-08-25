// referencing menu div element
var menuDiv = document.getElementById('main_menu');
var pageBreak = document.createElement('p');
menuDiv.classList.add("w3-container");
menuDiv.classList.add("w3-center");
menuDiv.classList.add("w3-animate-left");

menuDiv.appendChild(pageBreak);

console.log(menuDiv);

// creating the main element
var mainNav = document.createElement('nav');
mainNav.classList.add("navbar");
mainNav.classList.add("navbar-expand-lg");
mainNav.classList.add("navbar-light");

// creating home link
var rossLink = document.createElement('a');
rossLink.classList.add("navbar-brand");
rossLink.style.fontSize = "325%";
var rossLinkText = document.createTextNode("W. Ross White");
rossLink.href = "index.html";
rossLink.appendChild(rossLinkText);
mainNav.appendChild(rossLink)

// creating button element
var navButton = document.createElement('button');
navButton.type = "button";
navButton.classList.add("navbar-toggler");
navButton.setAttribute("data-toggle", "collapse");
navButton.setAttribute("color", "black");
navButton.setAttribute("data-target", "#navbarSupportedContent");
navButton.setAttribute("aria-controls", "navbarSupportedContent");
navButton.setAttribute("aria-expanded", "false");
navButton.setAttribute("aria-label", "Toggle navigation");
var buttonSpan = document.createElement('span');
buttonSpan.classList.add("navbar-toggler-icon");
navButton.appendChild(buttonSpan);
mainNav.appendChild(navButton);
console.log(navButton);

// creating collapse dropdown div
var mainDropdownDiv = document.createElement('div');
mainDropdownDiv.classList.add("collapse");
mainDropdownDiv.classList.add("navbar-collapse");
mainDropdownDiv.id = "navbarSupportedContent";
mainDropdownDiv.setAttribute("align-text", "right");
mainDropdownDiv.classList.add("main_dropdown_div");

// creating unordered list
var dropdownUl = document.createElement('ul');
dropdownUl.classList.add("navbar-nav");
dropdownUl.classList.add("mr-auto");

// creating first dropdown item
var developerLi = document.createElement('li');
developerLi.classList.add('nav-item-active');

////////
var developerLink = document.createElement('a');
developerLink.textContent = "Developer";
developerLink.href = "developer.html";
console.log(developerLink.innerText);
developerLink.classList.add("nav-link");
developerLink.id = "white_text";
developerLink.setAttribute("aria-haspopup", "true");
developerLink.setAttribute("aria-expanded", "false");
//////
developerLi.appendChild(developerLink);
dropdownUl.appendChild(developerLi);

// creating second dropdown
var writerLi = document.createElement('li');
writerLi.classList.add('nav-item');

////////
var writerLink = document.createElement('a');
writerLink.textContent = "Writer";
writerLink.href = "writer.html";
console.log(writerLink.innerText);
writerLink.classList.add("nav-link");
writerLink.id = "white_text";
writerLink.setAttribute("aria-haspopup", "true");
writerLink.setAttribute("aria-expanded", "false");
//////
writerLi.appendChild(writerLink);
dropdownUl.appendChild(writerLi);

// creating fourth dropdown
var aboutLi = document.createElement('li');
aboutLi.classList.add('nav-item');

////////
var aboutLink = document.createElement('a');
aboutLink.textContent = "About Me";
aboutLink.href = "about.html";
console.log(writerLink.innerText);
aboutLink.classList.add("nav-link");
aboutLink.id = "white_text";
aboutLink.setAttribute("aria-haspopup", "true");
aboutLink.setAttribute("aria-expanded", "false");
//////
aboutLi.appendChild(aboutLink);
dropdownUl.appendChild(aboutLi);

// developerLi.appendChild(developerDropDiv);
dropdownUl.appendChild(developerLi);

// attaching main dropdown div to menu div
mainDropdownDiv.appendChild(dropdownUl);
mainNav.appendChild(mainDropdownDiv);

// attaching mainNav to menuDiv
menuDiv.appendChild(mainNav);
menuDiv.appendChild(pageBreak);

console.log(menuDiv)