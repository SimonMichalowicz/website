const container = document.querySelector(".grid");
const resetGrid = document.querySelector('#resetButton')
let row = prompt("Please enter a value: ");
let column = row;

function makeGrid(gridSize, columnSize) {
    for (let i = 0; i < gridSize; i++) {
        const fullRow = document.createElement('div');
        fullRow.classList.add('row');
        container.appendChild(fullRow);  //adding a row each time a full row is looped
        for (let j = 0; j < columnSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            fullRow.appendChild(cell);
        }//adding cells one at a time to a row
    }

}//function to make a grid

function changeColor(cellColor){
    
    cellColor.style.backgroundColor="black";

}//function to set a cells background color

function reset(){
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    row = prompt("Please enter a value: ");
    column = row;
    makeGrid(row, column)
}

makeGrid(row, column); //Create grid on page load

container.addEventListener('mouseover', function(e) {
    target=e.target 
    if (target.matches("div.cell")) {
        changeColor(target);
    }
}); //Listen for mouseover and rung changeColor function if cell is highlighted.

resetGrid.addEventListener('click', () => {reset()});


//create 'container' of grid in html --DONE
//create individual squares within grid --DONE
//equal sides on grid needs to be row times row --DONE
//each square is a cell --DONE
//cell to be styled with border to seperate - no margin
    //cell borders to be equal on all sides--DONE

//have color be hightlighted on click and drag (on click works on drag?)
//adjust color to black
//reset button to clear to default value

//once basic grid in place take user input to determine size of grid
//user input set to x in space of 16
//set limit of 1-100 to prevent excessive input, error message and request new input

//change color input to rainbow (keep code for black)
//cycle through rgb color
//add GUI to make selection via button or checkbox
