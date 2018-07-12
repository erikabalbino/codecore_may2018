// Try Selecting
//
// 1. Select the 2nd button

$("button:nth-of-type(2)");

// 2. Select all anchor tags inside li tags

$("li a");

// 3. Count the number of blue circles

$(".blue.circle").length;

// ================== //

// 1.

$("a").attr("href", "http://nyan.cat");
// When using a method that writes changes to nodes
// with jQuery lists, the change will apply all nodes
// contained within without iterating.

// 2.

$(".blue")
  .removeClass("blue")
  .addClass("red");

// Most jQuery methods will return the jQuery list
// meaning that we can chain method after method after
// method to perform all effects that we want on
// our original list as shown above.

// Exercise: Practice // ================== //

// 1. Set the âclassâ attribute of all anchors
// to âhighlightâ with attr method.
$("a").attr("class", "highlight");

// 2. Replace all âcircleâ classes with the âdiamondâ class.
$(".circle")
  .removeClass("circle")
  .addClass("diamond");

// 3. Remove all shapes in the green & purple container.
$("#green-container .shape, #purple-container .shape").remove();
$("#green-container, #purple-container")
  .find(".shape") // .find allows to do sub-selections on
  // lists of nodes searching only among the descendents
  // of the nodes in the jQuery list.
  .remove();

// Exercise: Practice // ================== //

// Demo: html, children and parent
// Get âhtmlâ of the reset button.
$("#reset").html();

// 2. Try to get âhtmlâ of all links.
$("a").map((index, node) => $(node).html());

// When mapping over a jQuery list, the arguments
// given to the callback are in the reverse order
// of JavaScript's array map. That is the index
// is the first argument and the value (node) is the
// second argument.

// When iterating of a jQuery list, all nodes are
// are not wrapped inside a jQuery list. They are
// regular nodes (node instanceof Node === true).

// To use jQuery methods on a node, we must first
// put inside of a jQuery list using the $() function.
// Example: $(document.querySelector("div")).html()

// Exercise: Practice // ================== //

// 1. Replace contents of every âtdâ with âyassâ
$("td").html("yass");

// 2. Select parents of all td tags
$("td").parent(); // gets all "tr" tags
$("td")
  .parent()
  .parent(); // gets the "tbody" tag which
// contains all "tr"

// To get a node in a jQuery list by index and keep it
// inside a jQuery list use .eq(<node-index>)

// The .parents() method will return all ancestors making
// .parents a bad name choice.
$("td")
  .eq(0)
  .parents();


// ================== //
// 1. Create a âsmall blue diamondâ with $.

$(`
<div class="small blue diamond shape"></div>
`);

//  2. Append âsmall blue diamondsâ to all containers.

$(".container").append(
$(`
<div class="small blue diamond shape"></div>
`)
);

// To insert nodes next to other nodes (at any positions),
// use the following methods
// http://api.jquery.com/category/manipulation/dom-insertion-outside/

// 3.
$("ul").prepend(
    $(`
    <li><a href="http://nyan.cat">
      Nyan Cat
    </a></li>
  `)
  );

// ================== //

// Demo: Practice
// Create a div with the âcontainerâ class.
$(`<div class="container"></div>`);

// Prepend it to the first section tag in the body.
$("section")
  .first()
  .prepend($(`<div class="container"></div>`));

// Append a âsmall black circleâ to the container.
$("section")
  .first()
  .prepend(
    $(`<div class="container"></div>`).append(
      $(`<div class="small black circle shape"></div>`)
    )
);

    // ================== //

// All DOM may not be finished loading when your JavaScript
// is executed. This means that code that attempts
// manipulating those nodes will fail. To make sure
// that all the nodes are loaded before running such code,
// execute it in a listener to the "DOMContentLoaded"
// event as shown below.

// document.addEventListener("DOMContentLoaded", () => {
// The line below is a jQuery shortcut for the line above

$(() => {
    // Demo: Events with on
    console.log("HTML PARSED!");
  
    // 1.
    $(".blue.circle").on("mouseenter", event => {
      console.log("Blue Circle: Go away!");
    });
    // 2.
    $(".blue.circle").on("mouseleave", event => {
      console.log("Blue Circle: Come back!");
    });
    // 3.
    $("#button-1").on("click", event => {
      $(".shape").remove();
    });
});