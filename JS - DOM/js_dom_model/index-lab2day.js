
 document.querySelectorAll(".doggo.fighter").forEach(node => {
    node.addEventListener("click", event => {

    const { currentTarget } = event;

    doggoSelected = document.querySelector(".selected")
    if(doggoSelected) {
        doggoSelected.classList.remove("selected")
    }

    currentTarget.classList.add("selected");

    })
})

document.querySelectorAll(".teams .title").forEach(node => {
    node.addEventListener("click", event => {
        const { currentTarget, target } = event;
    
        doggoSelected = document.querySelector(".selected")
        // console.log(currentTarget.nextElementSibling);
        
        currentTarget.nextElementSibling.prepend(doggoSelected)
    })    
})

document.querySelector(".application").addEventListener("click", () => {

    const { currentTarget, target } = event;

    doggoSelected = document.querySelector(".selected")
    if(doggoSelected) {
        doggoSelected.classList.remove("selected")
    }
    
});

