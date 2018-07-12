// Go to the Johnny Five Javascript library's Githup repo.

// Change the text color of all file name and directory name links to red.
allNode = document.querySelectorAll(".js-navigation-open")
for (let n of allNode) { n.style.color = "red"} 

// Delete all file and directory icons from the file explorer (the big box below the Clone or download button).

for (let icon of document.querySelectorAll("td path")) {
    icon.remove();
}

// Clone the johnny five logo (the big yellow square with a robot inside) and use it to 
// replace the Github logo at the very top left of the page. Also, resize the cloned johnny five l
// ogo to be about the same size as the replaced Github logo.

const logoImg = document.querySelector(".markdown-body img");
logoImg.style.width = "32px";

const parent = document.querySelector(".header-logo-invertocat");

parent.replaceChild(logoImg.cloneNode(), parent.childNodes[1]);

// Replace all topic tags (e.g. javascript, arduino, chip. etc) with the first tags, javascript

document.querySelectorAll(".topic-tag").forEach(node => {
    node.innerHTML = "Java Script";
    });