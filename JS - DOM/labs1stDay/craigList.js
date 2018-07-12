// Go to Vancouver's Craiglist page and hack away with JavaScript:

// Get the href attribute of the first link on the page.
firstLink = document.querySelector("#logo a");


// Get the number of links on this page.
allLinks = document.querySelectorAll("a")
allLinks.length // 453


// Change the text for all links to be your name.
for (let node of allLinks) {
    node.innerText = "Erika"
}

// Make Craigslist's logo link to http://www.google.com
logo = document.querySelector("#logo a").href = "http://www.google.com";
// logo.setAttribute("href", "http://www.google.com")

// Make of all the text use the Papyrus font.
document.querySelector("body").style.fontFamily = "Papyrus" // "Papyrus"


// Stretch
// Make the event calendar alternate the background colour of each day square like a chess board.
const evenRowsOddCells = document.querySelectorAll(".cal tbody tr:nth-child(even) td:nth-child(odd)")
const oddRowsEvenCells = document.querySelectorAll(".cal tbody tr:nth-child(odd) td:nth-child(even)")

for (let cell of evenRowsOddCells) {
    cell.style.backgroundColor = "pink";
}

for (let cell of oddRowsEvenCells) {
    cell.style.backgroundColor = "pink";
}

// ------------

count = 0;
document.querySelectorAll('td').forEach(node => {
    if (count % 2 == 0) {
        node.style.backgroundColor = 'palegreen';
        count += 1;
    } else {
        node.style.backgroundColor = 'salmon';
        count += 1;
    }
});

// Remove all p and a nodes that contain the substring "es"
const links = document.querySelectorAll("a")

for (let link of links) {
    if (link.innerHTML.includes("es")) {
        link.innerHTML = "";
    }
}