const paintBrush = document.querySelector("#paintBrush")
const eraserBrush = document.querySelector("#eraserBrush")
const brushDiv = document.querySelector("#brushes")
const brushSize = document.querySelector(".sizeSlider")
const brushSizeText = document.querySelector("#brushSizeText")
const sketchBoard = document.querySelector("#sketchBoard")
const sketchBoardContainer = document.querySelector("#sketchBoardContainer")
const colorSelector = document.querySelectorAll(".colorSelector")
const backgroundColor = document.querySelector("input#backgroundColor")
const paintColor = document.querySelector("input#paintColor")
const resetBoardButton = document.querySelector("#resetBoard")
let paintColorValue = document.querySelector("input#paintColor").value
let brushSizeValue = ""


// creates grid inside sketchboard, number of grids in based on brushSizeValue

for (let i= 1;i <= 64*64;i++) {
    sketchBoard.appendChild(document.createElement("div"))
}


//initilialize the grid divs into a variable
const sketchBoardDivs = document.querySelectorAll("#sketchBoard > div")

// updates the brush size number on the page and also increase or decrease sketchboard div sizes
brushSize.oninput = function() {
    brushSizeText.innerText = `Brush Size: ${this.value}`
    sketchBoardDivs.forEach((div) => {
        div.style.width = `${this.value}px`
        div.style.height = `${this.value}px`
    })
    clearBoard();
}


// listens on user input for change in background color and applies it to the bg
backgroundColor.oninput = function () {
    sketchBoardContainer.style.backgroundColor = `${backgroundColor.value}`
    clearBoard()
}



// listens on user input for change in paint color and applies it to the paint
paintColor.oninput = function () {
    paintColorValue = paintColor.value
    clearBoard()
}


//changes background color of the target to paint
function paint(e){
    e.target.style.backgroundColor = paintColorValue;
}

//add pointover event listener to each div and once that event is triggered it calls paint function which paints the select div to pain color
//and it also adds an event listener to the sketchboard to stop painting on click

function paintOnBoard(){
    sketchBoardDivs.forEach( div =>{
        div.addEventListener("pointerover",paint)
})
    sketchBoard.addEventListener("click",stopPainting)
}


//listens for click on sketchboard and once triggered starts the paint function
function startPaintingOnClick(){
    sketchBoard.addEventListener("click",paintOnBoard)
}


//stop painting by toggling event listeners on sketchboard

function stopPainting(){
    sketchBoard.removeEventListener("click",stopPainting)
    sketchBoardDivs.forEach( div =>{
    div.removeEventListener("pointerover",paint)
})

    sketchBoard.addEventListener("click",startPaintingOnClick)
}

startPaintingOnClick()


function clearBoard(){
    sketchBoardDivs.forEach( div =>{
        div.style.backgroundColor = backgroundColor.value
    })
}

resetBoardButton.addEventListener("click",clearBoard)


// paintBrush.addEventListener("click","function")