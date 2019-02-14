var cols, rows;
var w = 25;
var grid = [];
var numberOfMovesSoFar = 0;
document.querySelector("#numberOfMovesLabel").innerHTML = numberOfMovesSoFar;

var labirinth = 
"1111111111111111111" +
"1002100010101010001" +
"1011101010101011101" + 
"1010101010100010101" + 
"1010111010111010101" + 
"1010001000100010101" + 
"1011101011101110101" + 
"1000000000001010101" +
"1011111010111010101" +
"1010101010001000101" +
"1110101110111011101" +
"1010101010000010001" +
"1010101010111110101" +
"1000000000001010101" + 
"1111111110111011101" +
"1000000000101010101" +
"1011101010101010101" +
"1000101010000000031" + 
"1111111111111111111";

var current, objective;

class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.actualColor;
        this.number;
      }
    //a method to set which colour should the cells be acording to the labirinth 
    show(number) {
        var x = this.i*w;
        var y = this.j*w;
        stroke(255);
        //painting the labirinth      
        if(number == 1){
            fill(82, 58, 52);
            this.color = "black";
            this.actualColor = "black";
            this.number = 9999;
            rect(x, y, w, w);
        }
        else if(number == 2){
            fill(249, 212, 27);
            this.color = "purple";
            this.actualColor = "white";
            this.number = 0;
            rect(x, y, w, w);
            current = this;
        }
        else if(number == 3){
            fill(0,255,255);
            this.actualColor = "blue";
            this.number = 0;
            rect(x, y, w, w);
            objective = this;
        }
        else{
            fill(239, 234, 213);
            this.color = "white";
            this.actualColor = "white";
            this.number = 0;
            rect(x, y, w, w); 
        } 
    }
    makeWhite(cell){
        var x = cell.i*w;
        var y = cell.j*w;
        stroke(247, 240, 208); 
        fill(247, 240, 208);
        rect(x, y, w, w);
    }
    makePurple(cell){
        var x = cell.i*w;
        var y = cell.j*w;
        stroke(249, 212, 27); 
        fill(249, 212, 27);
        rect(x, y, w, w);
    }
    makeBlack(cell){
        var x = cell.i*w;
        var y = cell.j*w;
        stroke(82, 58, 52); 
        fill(82, 58, 52);
        rect(x, y, w, w);
    }
    makeBlue(cell){
        var x = cell.i*w;
        var y = cell.j*w;
        stroke(204, 192, 189); 
        fill(204, 192, 189);
        rect(x, y, w, w);
    }
    //a method to paint just the first nine cells + goal
    paintingMoveStart(){
        for(var k = 0; k < grid.length; k++){
            grid[k].paint(grid[k]);
        }
    }
    //a method that is called whenever the current cell moves
    paintingMoveMoving(){
        for(var k = 0; k < grid.length; k++){
            grid[k].paintNew(grid[k]);
        }
        if(current.i == objective.i && current.j == objective.j){
            winner();
        }
    }
    //called by paintingMoveStart, does the literal painting
    paint(cell) {
        if((cell.i - 1 == current.i && cell.j - 1 == current.j) || (cell.i == current.i && cell.j - 1 == current.j) || (cell.i + 1 == current.i && cell.j - 1 == current.j)
        || (cell.i - 1 == current.i && cell.j     == current.j) || (cell.i == current.i && cell.j     == current.j) || (cell.i + 1 == current.i && cell.j     == current.j)        
        || (cell.i - 1 == current.i && cell.j + 1 == current.j) || (cell.i == current.i && cell.j + 1 == current.j) || (cell.i + 1 == current.i && cell.j + 1 == current.j)){
            if(cell.actualColor == "white"){
                cell.makeWhite(cell);
            }
            if(cell.color == "purple"){
                cell.makePurple(cell);
            }
            else if(cell.actualColor == "black"){
                cell.makeBlack(cell);
            }
        }
        else{   
            if(cell.actualColor != "blue"){
                cell.makeBlue(cell);
            }
        }
    }
    //called by paintingMoveMoving, does the literal painting
    paintNew(cell) {
        if((cell.i - 1 == current.i && cell.j - 1 == current.j) || (cell.i == current.i && cell.j - 1 == current.j) || (cell.i + 1 == current.i && cell.j - 1 == current.j)
        || (cell.i - 1 == current.i && cell.j     == current.j) || (cell.i == current.i && cell.j     == current.j) || (cell.i + 1 == current.i && cell.j     == current.j)        
        || (cell.i - 1 == current.i && cell.j + 1 == current.j) || (cell.i == current.i && cell.j + 1 == current.j) || (cell.i + 1 == current.i && cell.j + 1 == current.j)){
            if(cell.actualColor == "white"){   
                cell.makeWhite(cell);
            }
            if(cell.color == "purple"){
                cell.makePurple(cell);
            }
            else if(cell.actualColor == "black"){
                cell.makeBlack(cell);
            }
        }
    }
    //Giving all the white cells a numerical value for easier use of "valne fronta"
    valnaFrontaSetup(){
        var currentNumber = 1;
        var basicList = []; 
        var temporaryList;
        objective.number = currentNumber;
        basicList.push(objective);
        do{
        temporaryList = [];
        currentNumber += 1;
        basicList.forEach(function(item) {
            for(var k = 0; k < grid.length; k++){
                if((grid[k].i == item.i && grid[k].j - 1 == item.j && grid[k].number == 0) || /*Up*/ 
                   (grid[k].i + 1 == item.i && grid[k].j == item.j && grid[k].number == 0) || /*Right*/
                   (grid[k].i - 1 == item.i && grid[k].j == item.j && grid[k].number == 0) || /*Left*/
                   (grid[k].i == item.i && grid[k].j + 1 == item.j && grid[k].number == 0)    /*Down*/){
                grid[k].number = currentNumber;
                temporaryList.push(grid[k]);
            }}
        })
        basicList = temporaryList;
        }while(temporaryList.length != 0);
    }
    valnaFronta(){
        for(var k = 0; k < grid.length; k++){
            if((grid[k].i == current.i && grid[k].j - 1 == current.j && grid[k].number != 9999) || /*Up*/ 
                (grid[k].i + 1 == current.i && grid[k].j == current.j && grid[k].number != 9999) || /*Right*/
                (grid[k].i - 1 == current.i && grid[k].j == current.j && grid[k].number != 9999) || /*Left*/
                (grid[k].i == current.i && grid[k].j + 1 == current.j && grid[k].number != 9999)    /*Down*/){
                if(grid[k].number < current.number){
                    var newCell = grid[k];
                    newCell.upRightDownLeftPainting(newCell);
                    return true;
                }
            }
        }
    }
    //methods up, right, down, left which allow the player to move his cell to white cells
    up(){
        var newCell;
        for(var k = 0; k < grid.length; k++){
            if(grid[k].i == current.i && grid[k].j == current.j - 1 && grid[k].number != 9999){
                newCell = grid[k];
                newCell.upRightDownLeftPainting(newCell);
            }
        }
    }
    right(){
        var newCell;
        for(var k = 0; k < grid.length; k++){
            if(grid[k].i == current.i + 1 && grid[k].j == current.j && grid[k].number != 9999){
                newCell = grid[k];
                newCell.upRightDownLeftPainting(newCell);
            }
        }
    }
    down(){
        var newCell;
        for(var k = 0; k < grid.length; k++){
            if(grid[k].i == current.i && grid[k].j == current.j + 1 && grid[k].number != 9999){
                newCell = grid[k];
                newCell.upRightDownLeftPainting(newCell);
            }
        }
    }
    left(){
        var newCell;
        for(var k = 0; k < grid.length; k++){
            if(grid[k].i == current.i - 1 && grid[k].j == current.j && grid[k].number != 9999){
                newCell = grid[k];
                newCell.upRightDownLeftPainting(newCell);
            }
        }
    }
    upRightDownLeftPainting(newCell){
        current.makeWhite(current); 
        current.color = "white";
        current = newCell;
        current.makePurple(current); 
        current.color = "purple";
        numberOfMovesSoFar += 1;
        document.querySelector("#numberOfMovesLabel").innerHTML = numberOfMovesSoFar;
        newCell.paintingMoveMoving();
    }
}

function setup() {
    let canvas = createCanvas(475,475);
    canvas.parent("canvasWrapper");
    cols =  floor(width/w);
    rows = floor(height/w);
    numberOfMovesSoFar = 0;
    for (var i = 0; i < rows; i++){
        for (var j = 0; j < cols; j++){
            var cell = new Cell(i,j);
            grid.push(cell);
        }
    }
    for (var i = 0; i < grid.length; i++){
        grid[i].show(labirinth[i]);
    }
    current.paintingMoveStart();
    grid[0].valnaFrontaSetup();
    document.querySelector("#buttonUp").addEventListener("click", current.up);
    document.querySelector("#buttonRight").addEventListener("click", current.right);
    document.querySelector("#buttonDown").addEventListener("click", current.down);
    document.querySelector("#buttonLeft").addEventListener("click", current.left);
    document.querySelector("#valnaFronta").addEventListener("click", current.valnaFronta);
    document.querySelector("#exit").addEventListener("click", exiting);
}

function restart() {
    numberOfMovesSoFar = 0;
    document.querySelector("#numberOfMovesLabel").innerHTML = numberOfMovesSoFar;
    for (var i = 0; i < grid.length; i++){
        grid[i].show(labirinth[i]);
    }
    current.paintingMoveStart();
}
function winner() {
    var name;
    current.makeWhite(current);
    objective.makePurple(objective);
    setTimeout(function(){
    do {
        name = prompt("Enter name:");
    }while (name==null || name=="");
    localStorage.setItem(name, numberOfMovesSoFar);
    var playAgain = prompt("Do you wish to play again (yes/no):");
    if(playAgain.toLowerCase() == "yes"){
        restart();}
    else{
        window.location.replace("index.html");}},30);
}

function exiting() {
    console.log("no");
    window.location.replace("index.html");
}

