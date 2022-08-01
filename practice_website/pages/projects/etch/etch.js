const container = document.querySelector("#container");
const resetGrid = document.querySelector('#resetButton');
const black = document.querySelector('#black');
const eraser = document.querySelector('#eraser');
const rainbow = document.querySelector('#rainbow');

let cell;
let target;

function makeGrid(rowSize, columnSize) {
    container.style.setProperty('--numRows', rowSize); //set CSS grid property sizes
    container.style.setProperty('--numCols', columnSize);
    for (let i = 0; i < rowSize; i++)  {
        makeCell(columnSize);
    }
}//function to make a grid

function makeCell(cellNum) {
    for (let j = 0; j < cellNum; j++) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}//function to make cells and attach to container 

function blackink() {
    container.addEventListener('mouseover', function(e) {
        target=e.target 
            if (target.matches("div.cell")) {
                target.style.backgroundColor="black";
        }
    });
}//function to set a cells background color

function erase() {
    container.addEventListener('mouseover', function(e) {
        target=e.target 
            if (target.matches("div.cell")) {
                target.style.backgroundColor="white";
        }
    });
}

function reset(){
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    
    let userNum = prompt("Please enter a value between 1 and 100: ");
        while (userNum < 1 || userNum > 100 || isNaN(userNum)) {
            userNum = prompt("Please enter a value between 1-100: "); //set conditions on grid size and prevent NaN
        }
    makeGrid(userNum, userNum)
}//reset function

reset();

resetGrid.addEventListener('click', () => {reset()});

black.addEventListener('change', (e) => {
    if(e.target.checked) {
        blackink();
    }
});

eraser.addEventListener('change', (e) => {
    if(e.target.checked) {
        erase();
    }
});




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


//change color input to rainbow (keep code for black)
//cycle through rgb color
//add GUI to make selection via button or checkbox
