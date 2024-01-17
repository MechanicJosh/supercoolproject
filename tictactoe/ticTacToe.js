let cells = document.querySelectorAll('.row > div');
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
console.log(cells);
let gameComplete = false;
let congrats = document.getElementById('winner');

for (let i=0; i < cells.length; i++){
    cells[i].addEventListener('click', cellClicked);
}

function checkIfDraw(){
   let cellsArray = Array.from(cells);
   // if  every cell is not equal to '' then display tie
   if(cellsArray.every(myEvery)){ 
    congrats.innerHTML = 'Draw'
    return true;
   } 
   else{
   return false;
   }
}

function myEvery(cell){
    return cell.textContent !== '';
}

function TestWinningCombos(currentVal){
    // convert the node list to array
    let myCellArray = Array.from(cells);
    let myComboWithLoop = [];
    let loopIndex = 0;
    for(let cell of myCellArray){
        if(cell.textContent === currentVal){
            myComboWithLoop.push(loopIndex)
        }
        //increment index
        loopIndex++;
    }

/*     let myCombos = myCellArray.reduce((acc, cell, index) => 
    {
        if(cell.textContent === currentVal){
            acc.push(index)
        }
        return acc;
    }, []); */
    // test to see if my combos are in any of the winning ones
    let isWinner = false;
    for(let combo of winningCombos){
        // iterate each combo to see if each value resides in our my combos array
        isWinner = combo.every( i => myComboWithLoop.includes(i) );
        // if its a winner exit loop
        if(isWinner){
            break;
        }
    }
    return isWinner;
}

function cellClicked(event){

    if (gameComplete){
        reset();
        congrats.innerHTML
        return ;
    } 
    //test to see if the clicked cell is not empty, then return
    if (event.target.textContent != ''){
        return;
    }
    event.target.textContent = alternate();
    if(TestWinningCombos(event.target.textContent)){
        congrats.innerHTML = 'Winner is ' + event.target.textContent;
        gameComplete = true;
    }
    /* if(cells[0].textContent != "" && cells[0].textContent === cells[1].textContent && cells[1].textContent === cells[2].textContent){
        congrats.innerHTML = 'Winner is ' + event.target.textContent;
        gameComplete = true;
    }else if(cells[3].textContent != "" && cells[3].textContent === cells[4].textContent && cells[4].textContent === cells[5].textContent){
        congrats.innerHTML = 'Winner is ' + event.target.textContent;
        gameComplete = true;
    }else if(cells[6].textContent != "" && cells[6].textContent === cells[7].textContent && cells[7].textContent === cells[8].textContent){
        congrats.innerHTML = 'Winner is ' + event.target.textContent;
        gameComplete = true;
    }else if(cells[0].textContent != "" && cells[0].textContent === cells[3].textContent && cells[3].textContent === cells[6].textContent){
        congrats.innerHTML = 'Winner is ' + event.target.textContent;
        gameComplete = true;
    }else if(cells[1].textContent != "" && cells[1].textContent === cells[4].textContent && cells[4].textContent === cells[7].textContent){
        congrats.innerHTML = 'Winner is ' + event.target.textContent;
        gameComplete = true;
    }else if(cells[2].textContent != "" && cells[2].textContent === cells[5].textContent && cells[5].textContent === cells[8].textContent){
        congrats.innerHTML = 'Winner is ' + event.target.textContent;
        gameComplete = true;
    }else if(cells[0].textContent != "" && cells[0].textContent === cells[4].textContent && cells[4].textContent === cells[8].textContent){
        congrats.innerHTML = 'Winner is ' + event.target.textContent;
        gameComplete = true;
    }else if(cells[2].textContent != "" && cells[2].textContent === cells[4].textContent && cells[4].textContent === cells[6].textContent){
        congrats.innerHTML = 'Winner is ' + event.target.textContent;
        gameComplete = true; }*/
    else { 
        gameComplete = checkIfDraw();
       
    }

}

function reset(){
    // looping thru all of the cells and setting the text to empty string
   for(let cell of cells){
    cell.textContent = ''; 
   } 
   // reset text.innerHTML back to empty for winner or draw
   congrats.innerHTML = '';
   // reset isX to true
   isX = true;
   gameComplete = false;
}

var isX = true;

function  alternate(){
    if (isX == true){
        isX = !isX;
        return 'x'
    } else {
        isX = !isX;
        return 'o'
    }
}