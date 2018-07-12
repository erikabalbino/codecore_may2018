// Go to the Wikipedia page on Pugs. Open up a console, and hack away with JavaScript:

// Change the title of the article to your name.
document.querySelector("#firstHeading")
title = document.querySelector("#firstHeading")
title.innerHTML // "Pug"
title.innerHTML = "Érika" // "Érika"


// Hide the body of the article
document.querySelector("body").outerHTML = " "

// Replace the Wikipedia logo with another picture
const FLOWER_URL = "https://amp.businessinsider.com/images/54cbd460ecad04e048fdfe42-750-562.jpg";
node = document.querySelector(".mw-wiki-logo");
node.style.backgroundImage = `url(${FLOWER_URL})`;


// Replace the word "pug" in every p tag with "spud".

allP = document.querySelectorAll("p");

for (let p of allP) {
    p.innerHTML = p.innerHTML.replace(/pug/gi, "SPUD")
}
