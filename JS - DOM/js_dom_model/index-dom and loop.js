// JS: Document Object Model

// In the browser, the `document` is the root object of the DOM.
// Its descendent nodes represent all tags that loaded with
// the html document. By default, Chrome will display nodes
// as collapsible HTML, but you can use `console.dir()`
// to force Chrome to display as their actual object
// representation.
// Example: `console.dir(document)`

// SELECTING NODES

// In the following, <node> can be replaced with any node object
// such as the `document` or any selected with `querySelector`
// and friends. (i.e. any object that is an `instanceof Node`)

// <node>.querySelector(<css-query>)
// Finds the first node that matches the <css-query>. Replace
// <css-query> with any valid CSS selectory we've learned before.

const toxicTim = document.querySelector("#toxic-tim");
const teamSalmon = document.querySelector(".team.salmon");

// <node>.querySelectorAll(<css-query>)
// Finds ALL nodes that match the <css-query>. It returns
// them in a NodeList instance that is similar to array.
// NodeList can be iterated with `for .. of` loops and
// the .forEach() method.

const allDoggos = document.querySelectorAll(".doggo");
const allTeams = document.querySelectorAll(".team");

// Iteration example:

// for (let node of allDoggos) {
//   console.log(node.id);
// }

// Exercise: Picking Doggos

// 1.
document.querySelectorAll("#moneybags-michael, #larry-the-lion");

// 2.
document.querySelectorAll(".team.teal .doggo.fighter:not(:first-child)");

// 3.
document.querySelectorAll(".team .doggo:nth-child(2)");

// NAVIGATING THE DOM

// <node>.parentElement
// This property returns the parent node of <node>.
teamSalmon === toxicTim.parentElement.parentElement; // true

// <node>.children
// This property returns children node of <node>.
teamSalmon.children;
teamSalmon.children[1].children;

// <node>.matches(<css-query>)
// Returns `true` if <node> matches the <css-query>; `false`
// if it doesn't.

toxicTim.matches(".doggo"); // true
toxicTim.matches(".doggo.worker"); // false
toxicTim.matches("p"); // false
toxicTim.matches("div"); // true

// <node>.closest(<css-query>)
// Searchs all ancestors (including <node> itself) of <node>
// for the first ancestor that matches <css-query>. It returns
// `null` if no ancestor matches <css-query>.

toxicTim.closest(".team"); // <div class=â"team salmon">...</div>â
toxicTim.closest("input"); // null
toxicTim.closest("body"); // <body>...</body>â
toxicTim.closest(".team.teal"); // null

// MANIPULATION

// Styling with Inline Styles

const application = document.querySelector("div.application");

// Nodes have a `style` property that holds an object which
// contains all inline styles (i.e. the HTML attribute "style")
// of a Node. This object can be mutated to directly change an
// inline style live.

// Example usage:
application.style.border = "solid medium lightgrey";
application.style.padding = "5px";
application.style.borderRadius = "5px";
application.style.boxSizing = "border-box";
application.style["background-color"] = "whitesmoke";

// Disclaimer: It's best practice to only use inline styles
// to affect the styling of a node when the changes occur very often.
// For example, changing the position a node using CSS when implementing
// drag and drop with JavaScript.

// Sometimes its necessary to read the actual applied CSS properties
// on a Node. To do this, use the global function `getComputedStyle`.

getComputedStyle(toxicTim);
getComputedStyle(toxicTim).backgroundColor;
getComputedStyle(toxicTim).fontFamily;

// CHANGING AND READING CONTENTS OF A NODE

// <node>.innerHTML
// This property contains all the HTML as a string that is inside
// of <node> with whitespace preserved.
toxicTim.innerHTML;
// "
//             <h1>Toxic Tim</h1>
//           "

// <node>.innerHTML=<html-string>
// Assign to `.innerHTML` to replace the contents with other HTML.
toxicTim.innerHTML = "<h1>Toxic Tim ð¶</h1>";

// <node>.outerHTML
// Like `innerHTML`, but includes <node> itself.
toxicTim.outerHTML;
// "<div id="toxic-tim" class="doggo fighter">
//             <h1>Toxic Tim</h1>
//           </div>"

// <node>.outerHTML=<html-string>
// Like `innerHTML`, but will replace <node> and its contents.
// document.querySelector("body").outerHTML = ""; // Erases everything!

// READING AND WRITING TO HTML5 ATTRIBUTES

// All common HTML attributes that are part of the spec are
// accessible as properties on Nodes. You read them or assign them
// to change their values.

// Examples.
toxicTim.id; //  "toxic-tim"
toxicTim.class; // undefined
toxicTim.className; // "doggo fighter"
toxicTim.href; // undefined
document.querySelector("input").name; // "name"

// For custom attributes that are not part of HTML5, we must
// alternate methods.

// <node>.getAttribute(<attribute-name>)
// Returns the value of HTML attribute with name <attribute-name>
// from a Node even if its a custom attribute. May be inconsistent
// with the `value` attribute of `input` fields.

toxicTim.getAttribute("id");
toxicTim.getAttribute("class");
document.querySelector("form").getAttribute("action");

// <node>.setAttribute(<attribute-name>, <value>)
// Sets the attribute on a Node using the new <value>.

toxicTim.setAttribute("data-confirm", "Are you sure?");
toxicTim.getAttribute("data-confirm"); // "Are you sure?"

// MANIPULATING CLASSES

// <node>.classList is property returns DOMTokenList with methods
// to add, remove or toggle classes that are part of <node>.
// You should nearly always use this to change classes instead
// of <node>.className.

// <node>.classList.add(<class-name>, <class-name>, ...)
// To add classes to <node>, use the .add with any number of class names.
toxicTim.classList.add("labourer");

// <node>.classList.remove(<class-name>, <class-name>, ...)
// To remove any number of classes from <node>, use the remove
// method with multiple <class-name> arguments.
// toxicTim.classList.remove("fighter");
toxicTim.classList.add("injured");

// <node>.classList.toggle(<class-name>)
// To toggle a <class-name> from <node>, use toggle with a single
// <class-name> argument. It will return `false` when the class is
// removed. It will return `true` when the class is added.

// "labourer" is present therefore, its removed
toxicTim.classList.toggle("labourer"); // false
// "labourer" is present therefore, its added
toxicTim.classList.toggle("labourer"); // true
toxicTim.classList.toggle("labourer"); // false

// REMOVING NODES

// <node>.remove()
// Removes <node> from the DOM.

// toxicTim.remove()

// Exercise: Vandalise The Arena

// 1.

// for (let node of document.querySelectorAll(".team")) {
//     node.style.backgroundColor = "fuchsia";
//   }
// 2.
// 
// for (let node of allDoggos) {
//     node.innerHTML = "<h1>Rob the Slob</h1>";
// }

// or this 👇
// document.querySelectorAll(".doggo.fighter").forEach(node => {
// node.innerHTML = "<h1>Rob The Slob</h1>";
// });

// 3.
// for (let node of allDoggos) {
//     node.style.backgroundImage = `url("https://i.imgur.com/lVlPvCBb.jpg")`;
//   }

// or this 👇
// const CAT_URL =
//   "https://amp.businessinsider.com/images/54cbd460ecad04e048fdfe42-750-562.jpg";

// for (let node of document.querySelectorAll(".doggo.fighter")) {
//   node.style.backgroundImage = `url(${CAT_URL})`;
// }

// CREATING NODES

// document.createElement(<tag-name>)
// Creates an empty HTML Node with tag name of <tag-name>. This
// is detached from the DOM. To attach it to DOM (displaying it),
// we'll have to huge some other methods later.

const drillBitDarel = document.createElement("div");
drillBitDarel.setAttribute("id", "drill-bit-darel");
drillBitDarel.classList.add("doggo", "fighter");
drillBitDarel.style.backgroundImage = `url(images/drill_bit_darel.jpg)`;

// <parent-node>.append(<child-node>, <child-node>, ...)
// Use this method to add any number of <child-node> as
// last children nodes of <parent-node>.

const drillBitDarelName = document.createElement("h1");
drillBitDarelName.innerText = "Drill Bit Darel";

drillBitDarel.append(drillBitDarelName);

// <parent-node>.prepend(<child-node>, <child-node>, ...)
// Use this method add any number of <child-node> as the first
// children of <parent-node>.

const teamTeal = document.querySelector(".team.teal");
teamTeal.querySelector(".roster").prepend(drillBitDarel);

// Using a method like `<parent-node>.prepend(...)` or
// `<parent-node>.append(...)` for a Node already the document,
// will move that Node instead of copying to the new location.

// Moves `drillBitDarel` from `teamTeal` to `teamSalmon`.
teamSalmon.querySelector(".roster").append(drillBitDarel);

// <node>.cloneNode()
// Returns a duplicate copy of <node>. By default, it only duplicates
// <node> itself without its descendents meaning that duplicating
// `drillBitDarel` will not include the <h1> inside.

teamTeal.querySelector(".roster").prepend(drillBitDarel.cloneNode());

// To include the ancestor Nodes, call <node>.cloneNode() with
// the `true` argument.

teamTeal.querySelector(".roster").prepend(drillBitDarel.cloneNode(true));

// =====================================================================

// JS : EVENTS & LOOP

// const toxicTim = document.querySelector("#toxic-tim");
/*
toxicTim.addEventListener("click", () => {
  console.log("Toxic Tim was clicked!");
});

document.addEventListener("click", () => {
  console.log("Something was clicked!");
});
*/

// <node>.addEventListener(<event-name>, <listener-callback>)
// This method allows us to react to events that occur
// in the browser whether triggered by a user or another
// source.

// Its first argument is a string that refers to an
// event name. The names are significant and correspond
// to a set of hard-coded. Here's a full list of event
// names:
// https://developer.mozilla.org/en-US/docs/Web/Events

// Its second argument is a callback named "listener"
// that is called when the event is triggered.

// Demo: Clicks, Events & Properties

const teams = document.querySelector(".teams");

if (false) {

    teams.addEventListener("click", function(event) {
        // console.log(event);
      
        console.log("===================");
        console.log("type:", event.type);
        console.log("target:", event.target);
        // The .target is the node that originally triggered
        // the event. In the case of the "click" event, it's the
        // node where the cursor was on at the time the click
        // happened.
        console.log("currentTarget:", event.currentTarget);
        // The .currentTarget is node that has the .addEventListener
        // method (or the node that is listening for the event.)
      
        console.log("this:", this);
        // `this` inside the listener will be the same as
        // event.currentTarget. Avoid `this` because it can
        // be overwritten in any numbers and arrow functions
        // this can not be set. Instead, use `event.currentTarget`
        // whenever possible.
        // If it's already to convention to use `this` in a
        // codebase you are working with, then don't break
        // the convention continue using `this`.
      });
}

// MOUSE EVENTS

document.querySelectorAll(".team .doggo").forEach(node => {
    node.addEventListener("dblclick", event => {
      // const currentTarget = event.currentTarget;
      // const target = event.target;
      // The line below is Object destructuring.
      // It is syntax sugar for the line above.
      const { currentTarget, target } = event;
      currentTarget.classList.toggle("inverted");
    });
  
    node.addEventListener("mousedown", event => {
      const { currentTarget } = event;
  
      currentTarget.classList.add("flipped");
    });

    node.addEventListener("mouseup", event => {
      const { currentTarget } = event;
  
      currentTarget.classList.remove("flipped");
    });

    // Exercise: Crouching Mouse Hidden Doggo
    // "mouseenter" triggers once the cursor
    // enters the currentTargert's box.
    // "mouseover" triggers everytime the cursor
    // enters a target's box.
    node.addEventListener("mouseenter", event => {
      const { currentTarget } = event;
      currentTarget.classList.add("monochrome")
    })

    // "mouseleave" triggers once the cursor
    // leaves the currentTarget's box.
    // "mouseout" triggers everytime the cursor
    // leaves a target's box.
    node.addEventListener("mouseleave", event => {
      const { currentTarget } = event;
      currentTarget.classList.remove("monochromed")
    })

  });

// INPUT EVENT

// Demo: Type Loudly

const random = n => Math.ceil(Math.random() * n);
const playSound = () => new Audio(`sounds/vintage-keyboard-${random(5)}.wav`);

document.querySelectorAll("#application-form input").forEach(node => {
    node.addEventListener("input", event => {
        // console.log(event);
        const { currentTarget } = event;

        // To the contents that user typed in an input
        // field, use the ".value" property which returns
        // the "value" of the HTML attribute "value".
        // console.log(currentTarget.value);
        
        playSound().play();
    })
})


// Demo: Preview Application

document
  .querySelector("#application-form")
  .addEventListener("submit", event => {
    // Use .preventDefault() method on the event
    // object to prevent it from triggering
    // any default behaviour.
    // This stops anchor tags from telling the browser
    // to a get request to its href. It prevents
    // form tags from telling the browser to
    // make a request to its action attribute.
    event.preventDefault();
    const { currentTarget } = event; // the form
    // console.log(event);

    // To get all input values from a form, use the
    // FormData constructor with a form node as its argument.
    const formData = new FormData(currentTarget);
    // console.log(formData);

    // TO get the value of an input, use the `.get` method
    // on a FormData instance with the "name" attribute
    // of a correspoding input, textarea, select, etc.
    console.log(formData.get("name"));
    console.log(formData.get("picture-url"));
    console.log(formData.get("team-name"));

    // To list all of the data inside of a FormData object,
    // you have to write a bit of code. First use
    // .entries() to get an iterator and then we convert
    // that into an array.
    console.log(Array.from(formData.entries()));

    const blankDoggo = document.querySelector(".doggo.blank");

    blankDoggo.style.backgroundImage = `url(${formData.get("picture-url")})`;
    blankDoggo.querySelector("h1").innerText = formData.get("name");

  });

  // KEYBOARD EVENTS

  document.addEventListener("keydown", event => {
    // console.log(event);
  
    const { keyCode, key, altKey, ctrlKey, shiftKey, metaKey } = event;
    console.log(
      "key:",
      key,
      "keyCode:",
      keyCode,
      "altKey:",
      altKey,
      "ctrlKey:",
      ctrlKey,
      "shiftKey:",
      shiftKey,
      "metaKey:",
      metaKey
    );

    // Demo: Shortcut to NyanCat
    // ALT + CTRL + n (keyCode = 78)
    if (keyCode === 78 && altKey && ctrlKey) {
        console.log("Going to Nyancat!");
        window.location.href = "http://nyan.cat";
    }
    if (keyCode === 80, keyCode === 65, keyCode === 78, keyCode === 73, keyCode === 67 ) {
        // console.log("Going to Nyancat!");
        window.location.href = "http://hackertyper.net";
    }


  });

  // ========================================




