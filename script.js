var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Task 1.0
// Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector("main");

// Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.

// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'

mainEl.style.backgroundColor = "var(--main-bg)";

// Task 1.2
// Set the content of mainElto <h1>SEI Rocks!</h1

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// Task 1.3
// Add a class of flex-ctrto mainEl
mainEl.className = "flex-ctr";

// Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl
const topMenuEl = document.querySelector("#top-menu");

// Task 2.1
// Set the height topMenuElelement to be 100%.
topMenuEl.style.height = "100%";

// Task 2.2
// Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Task 2.3
// Add a class of flex-aroundto topMenuEl.
topMenuEl.className = "flex-around";

menuLinks.forEach((link) => {
  let ancEl = document.createElement("a");
  ancEl.attributes.href = link.href;
  ancEl.innerText = link.text;
  topMenuEl.appendChild(ancEl);
});
// Task 4.0
// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
const subMenuEl = document.querySelector("#sub-menu");

// Task 4.1
// Set the height subMenuElelement to be 100%
subMenuEl.style.height = "100%";

// Task 4.2
// Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Task 4.3
// Add the class of flex-aroundto the subMenuElelement
subMenuEl.className = "flex-around";

// Task 4.4
// Set the CSS positionproperty of subMenuElto the value of absolute
subMenuEl.style.position = "absolute";

// Task 4.5
// Set the CSS topproperty of subMenuElto the value of 0
subMenuEl.style.top = "0";

// Task 5.1
// Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
const topMenuLinks = document.getElementById("top-menu").querySelectorAll("a");

// Declare a global showingSubMenuvariable and initialize it to false;
const showingSubMenu = "false";

// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.

// The first line of code of the event listener function should call the event object's preventDefault()method.

// The second line of code function should immediately return if the element clicked was not an <a>element.

// console.logthe content of the <a>to verify the handler is working

// Task 5.3
// Next in the event listener, if the clicked <a>link has a class of active:

// Remove the activeclass from the clicked <a>element.
// Set the showingSubMenuto false.
// Set the CSS topproperty of subMenuElto 0.
// returnto exit the handler.

topMenuEl.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.nodeName == "A") {
    console.log(e.target.innerText);
  } else {
    console.log("not an <a> element");
  }
  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }
  for (let i = 0; i < topMenuLinks; i++) {
    topMenuLinks[i].classList.add("active");
    topMenuLinks[i].classList.remove("active");
  }
  e.target.classList.add("active");
});

// Task 5.4
// Next, the event listener should remove a class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.

// Hint: Removing a non-existent class from an element does not cause an error, so just remove it!

// Task 5.5
// Next, the event listener should add a class name of activeto the <a>element that was clicked
