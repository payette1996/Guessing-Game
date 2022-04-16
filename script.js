const board = {
    block1: document.getElementById("block1"),
    block2: document.getElementById("block2"),
    block3: document.getElementById("block3"),
    block4: document.getElementById("block4"),
    block5: document.getElementById("block5"),
    block6: document.getElementById("block6"),
    block7: document.getElementById("block7"),
    block8: document.getElementById("block8"),
    block9: document.getElementById("block9")
}

//Assigns an event listener to each block.
for (let i = 0; i < Object.keys(board).length; i++) {
    Object.values(board)[i].addEventListener("click", () => {
        Object.values(board)[i].classList.add("blockFlipped")
    });
}

//Randomly defines one of the blocks as the win case (assigns it an eventListener).
Object.values(board)[Math.floor(Math.random() * 9)].addEventListener("click", () => {
    for (let i = 0; i < Object.keys(board).length; i++) {
        Object.values(board)[i].style.cssText = `
            border-radius: 50%;
            background-color: blue;
            cursor: default;
        `
    }
    document.getElementById("title").innerText = "WIN"
});