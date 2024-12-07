const sketchBoard = document.querySelector("#sketchboard")
const heading = document.querySelector("h1")
const backgroundColor = "red"


//fills box with divs [improve functionality to take in variables so brush size can increase or decrease]

for (let i = 1;i <= 38*38;i++) {
    sketchBoard.appendChild(document.createElement("div"))
}

//selecting divs after they are created

const sketchBoardDivs = document.querySelectorAll("#sketchboard > div");

//draws on
function drawingFunction(e) {
    e.target.style.backgroundColor = backgroundColor; // Change color of the hovered element
}

function startDrawing() {
    sketchBoardDivs.forEach(div => {
        div.addEventListener("pointerover", drawingFunction); // Add hover effect
    });
    sketchBoard.removeEventListener("click", startDrawing); // Ensure it doesn't rebind
    sketchBoard.addEventListener("click", stopDrawing); // Allow toggle to stop drawing
}

function stopDrawing() {
    sketchBoardDivs.forEach(div => {
        div.removeEventListener("pointerover", drawingFunction); // Remove hover effect
    });
    sketchBoard.removeEventListener("click", stopDrawing); // Ensure it doesn't rebind
    sketchBoard.addEventListener("click", startDrawing); // Allow toggle to start drawing again
}

// Attach initial click event
sketchBoard.addEventListener("click", startDrawing);
