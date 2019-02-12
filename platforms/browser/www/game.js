var cols, rows;
var w = 25;
var grid = [];
var numberOfMovesSoFar = 0;

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
            stroke(249, 212, 27);
            fill(249, 212, 27);
            this.color = "purple";
            this.actualColor = "white";
            current = this;
            this.number = 0;
            rect(x, y, w, w);
            current = this;
        }
        else if(number == 3){
            fill(0,255,255);
            this.color = "blue";
            this.actualColor = "white";
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
    //a method to paint just the first nine cells + goal
    paintingMoveStart(){
        for(var k = 0; k < grid.length; k++){
            grid[k].paint(grid[k]);
        }
    }
    //a method that is called whenever the cell the player controles moves
    paintingMoveMoving(){
        for(var k = 0; k < grid.length; k++){
            grid[k].paintNew(grid[k]);
        }
    }
    //called by paintingMoveStart, does the literal painting
    paint(cell) {
        if((cell.i - 1 == current.i && cell.j - 1 == current.j) || (cell.i == current.i && cell.j - 1 == current.j) || (cell.i + 1 == current.i && cell.j - 1 == current.j)
        || (cell.i - 1 == current.i && cell.j     == current.j) || (cell.i == current.i && cell.j     == current.j) || (cell.i + 1 == current.i && cell.j     == current.j)        
        || (cell.i - 1 == current.i && cell.j + 1 == current.j) || (cell.i == current.i && cell.j + 1 == current.j) || (cell.i + 1 == current.i && cell.j + 1 == current.j))
        {
            if(cell.actualColor == "white")
            {
                var x = cell.i*w;
                var y = cell.j*w;
                stroke(247, 240, 208); 
                fill(247, 240, 208);
                rect(x, y, w, w);}
            if(cell.color == "purple")
            {
                var x = cell.i*w;
                var y = cell.j*w;
                stroke(249, 212, 27); 
                fill(249, 212, 27);
                rect(x, y, w, w);}
            else if(cell.actualColor == "black")
            {
                var x = cell.i*w;
                var y = cell.j*w;
                stroke(82, 58, 52); 
                fill(82, 58, 52);
                rect(x, y, w, w);}}
        else
        {   
            if(cell.color != "blue")
            {
            var x = cell.i*w;
            var y = cell.j*w;
            stroke(204, 192, 189); 
            fill(204, 192, 189);
            rect(x, y, w, w);}}
    }
    //called by paintingMoveMoving, does the literal painting
    paintNew(cell) {
        if((cell.i - 1 == current.i && cell.j - 1 == current.j) || (cell.i == current.i && cell.j - 1 == current.j) || (cell.i + 1 == current.i && cell.j - 1 == current.j)
        || (cell.i - 1 == current.i && cell.j     == current.j) || (cell.i == current.i && cell.j     == current.j) || (cell.i + 1 == current.i && cell.j     == current.j)        
        || (cell.i - 1 == current.i && cell.j + 1 == current.j) || (cell.i == current.i && cell.j + 1 == current.j) || (cell.i + 1 == current.i && cell.j + 1 == current.j))
        {
            if(cell.actualColor == "white")
            {
                var x = cell.i*w;
                var y = cell.j*w;
                stroke(247, 240, 208); 
                fill(247, 240, 208);
                rect(x, y, w, w);}
            if(cell.color == "purple")
            {
                var x = cell.i*w;
                var y = cell.j*w;
                stroke(249, 212, 27); 
                fill(249, 212, 27);
                rect(x, y, w, w);}
            else if(cell.actualColor == "black")
            {
                var x = cell.i*w;
                var y = cell.j*w;
                stroke(82, 58, 52); 
                fill(82, 58, 52);
                rect(x, y, w, w);}
        }
    }
    //Giving all the white cells a numerical value for easier use of "valne fronta"
    // valnaFrontaSetup(){
    //     var currentNumber = 1;
    //     var basicList = [];
    //     var temporaryList = [];
    //     objective.number = currentNumber;
    //     basicList.push(objective);
    //     do{
    //     temporaryList = [];
    //     currentNumber += 1;
    //     basicList.forEach(function(item) {
    //         for(var k = 0; k < grid.length; k++){
    //             if((grid[k].i == item.i && grid[k].j - 1 == item.j) || /*Up*/ 
    //                (grid[k].i + 1 == item.i && grid[k].j == item.j) || /*Right*/
    //                (grid[k].i - 1 == item.i && grid[k].j == item.j) || /*Left*/
    //                (grid[k].i == item.i && grid[k].j + 1 == item.j)    /*Down*/)
    //             item.number = currentNumber;
    //             temporaryList.push(item);
    //         }
    //     })
    //     console.log("Novo");
    //     basicList = temporaryList;
    //     }while(temporaryList.length != 0);
    //}
    //methods up, right, down, left which allow the player to move his cell to white cells
    up(){
        var newCell;
        for(var k = 0; k < grid.length; k++){
            if(grid[k].i == current.i && grid[k].j == current.j - 1){
                newCell = grid[k];}}
        if(newCell.color == "white"){
            //making the users square white
            var x = current.i*w;
            var y = current.j*w;
            stroke(247, 240, 208); 
            current.color = "white";
            fill(247, 240, 208);
            rect(x, y, w, w);
            //making the new cell purple
            current = newCell;
            var x = current.i*w;
            var y = current.j*w;
            stroke(255); 
            current.color = "purple";
            fill(255,0,255);
            rect(x, y, w, w);}
            numberOfMovesSoFar += 1
            newCell.paintingMoveMoving();
        //checking did we reach the goal
        if(newCell.color == "blue") {
            winner() }
    }
    right(){
        var newCell;
        for(var k = 0; k < grid.length; k++){
            if(grid[k].i == current.i + 1 && grid[k].j == current.j){
                newCell = grid[k];}}
        if(newCell.color == "white"){
            //making the users square white
            var x = current.i*w;
            var y = current.j*w;
            stroke(247, 240, 208); 
            current.color = "white";
            fill(247, 240, 208);
            rect(x, y, w, w);
            //making the new cell purple
            current = newCell;
            var x = current.i*w;
            var y = current.j*w;
            stroke(82, 58, 52); 
            current.color = "purple";
            fill(255,0,255);
            rect(x, y, w, w);}
            numberOfMovesSoFar += 1
            newCell.paintingMoveMoving();
        //checking did we reach the goal
        if(newCell.color == "blue") {
            winner()}
        }
    down(){
        var newCell;
        for(var k = 0; k < grid.length; k++){
            if(grid[k].i == current.i && grid[k].j == current.j + 1){
                newCell = grid[k];}}
        if(newCell.color == "white"){
            //making the users square white
            var x = current.i*w;
            var y = current.j*w;
            stroke(247, 240, 208); 
            current.color = "white";
            fill(247, 240, 208);
            rect(x, y, w, w);
            //making the new cell purple
            current = newCell;
            var x = current.i*w;
            var y = current.j*w;
            stroke(255); 
            current.color = "purple";
            fill(255,0,255);
            rect(x, y, w, w);}
            numberOfMovesSoFar += 1
            newCell.paintingMoveMoving();
        //checking did we reach the goal   
        if(newCell.color == "blue") {
            winner()}
        }
    left(){
        var newCell;
        for(var k = 0; k < grid.length; k++){
            if(grid[k].i == current.i - 1 && grid[k].j == current.j){
                newCell = grid[k];}}
        if(newCell.color == "white"){
            //making the users square white
            var x = current.i*w;
            var y = current.j*w;
            stroke(255); 
            current.color = "white";
            fill(255,255,255);
            rect(x, y, w, w);
            //making the new cell purple
            current = newCell;
            var x = current.i*w;
            var y = current.j*w;    
            stroke(255); 
            current.color = "purple";
            fill(255,0,255);
            rect(x, y, w, w);}
            numberOfMovesSoFar += 1
            newCell.paintingMoveMoving();
        //checking did we reach the goal 
        if(newCell.color == "blue") {
            winner()}
        };
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
    // grid[0].valnaFrontaSetup();
    document.querySelector("#buttonUp").addEventListener("click", current.up);
    document.querySelector("#buttonRight").addEventListener("click", current.right);
    document.querySelector("#buttonDown").addEventListener("click", current.down);
    document.querySelector("#buttonLeft").addEventListener("click", current.left);
}

function restart() {
    numberOfMovesSoFar = 0;
    for (var i = 0; i < grid.length; i++){
        grid[i].show(labirinth[i]);
    }
    current.paintingMoveStart();
}
function winner() {
    var text, name;
    var x = current.i*w;
    var y = current.j*w;
    stroke(247, 240, 208); 
    fill(247, 240, 208);
    rect(x, y, w, w);
    var x = objective.i*w;
    var y = objective.j*w;
    stroke(249, 212, 27); 
    fill(249, 212, 27);
    rect(x, y, w, w);
    do {
        name = prompt("Enter name:");
    }while (name==null || name=="");
    text = name +" in "+ numberOfMovesSoFar + " moves";
    localStorage.setItem(name, numberOfMovesSoFar);
    console.log(text);
    var playAgain = prompt("Do you wish to play again (yes/no):");
    if(playAgain.toLowerCase() == "yes"){
        restart();}
    else{
        window.location.replace("index.html");}
}

