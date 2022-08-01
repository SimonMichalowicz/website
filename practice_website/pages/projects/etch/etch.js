const container = document.querySelector("#grid");
const resetGrid = document.querySelector('#resetButton');
const black = document.querySelector('#black');
const eraser = document.querySelector('#eraser');
const rainbow = document.querySelector('#rainbow');

let target;

function makeGrid(rowSize, columnSize) {
    container.style.setProperty('--numRows', rowSize); //set CSS grid property sizes
    container.style.setProperty('--numCols', columnSize);
    for (let i = 0; i < rowSize; i++)  {
        makeCell(columnSize);
    }
}//function to make a grid looping over makeCell function

function makeCell(cellNum) {
    for (let j = 0; j < cellNum; j++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}//function to make cells and attach to container.

function blackink() {
    container.addEventListener('mouseover', function(e) {
        target=e.target 
            if (target.matches("div.cell")) {
                target.style.backgroundColor="black";
        }
    });
}//set background color on hover on cells to black

function erase() {
    container.addEventListener('mouseover', function(e) {
        target=e.target 
            if (target.matches("div.cell")) {
                target.style.backgroundColor="white";
        }
    });
}//set background color on hover on cells to white

function rainbowInk() {
    container.addEventListener('mouseover', function(e) {
        target=e.target 
            if (target.matches("div.cell")) {
                target.style.backgroundColor=rgb();
        }
    });

}//set background color on hover on cells to random color

function rgb() {
    let rgbColor = ['red', 'orange', 'yellow', 'green', 'blue', 'pink', 'purple', 'brown'];
    let rgbRandom = rgbColor[Math.floor(Math.random()*rgbColor.length)];
    return rgbRandom;
}//pull random color from array and return color.

function reset(){
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    } //remove old grid by removing all cell divs to keep site clean
    
    let userNum = 16 //prompt("Please enter a value between 1 and 100: ");
        while (userNum < 1 || userNum > 100 || isNaN(userNum)) {
            userNum = prompt("Please enter a value between 1-100: "); //set conditions on grid size and prevent NaN
        }
    makeGrid(userNum, userNum)
}//reset to make a new grid.

reset(); //prompt user on page launch

resetGrid.addEventListener('click', () => {reset()}); //user enabled reset

black.addEventListener('change', (e) => {
    if(e.target.checked) {
        blackink();
    }
}); //enable black ink

eraser.addEventListener('change', (e) => {
    if(e.target.checked) {
        erase();
    }
}); //enable eraser

rainbow.addEventListener('change', (e) => {
    if(e.target.checked) {
        rainbowInk();
    }
}); //enable rgb ink




//create 'container' of grid in html --DONE
//create individual squares within grid --DONE
//equal sides on grid needs to be row times row --DONE
//each square is a cell --DONE
//cell to be styled with border to seperate - no margin
    //cell borders to be equal on all sides--DONE

//have color be hightlighted on click and drag (on click works on drag?)-- DONE
//adjust color to black --DONE
//reset button to clear to default value -- DONE

//once basic grid in place take user input to determine size of grid --DONE
//user input set to x in space of 16 --DONE
//set limit of 1-100 to prevent excessive input, error message and request new input --DONE

//Grid to stay same size regardless of value entered--done


//change color input to rainbow (keep code for black) --DONE
//cycle through rgb color --DONE
//add GUI to make selection via button or checkbox --DONE
