var cols, rows;
var w = 25;
var grid = [];

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
      }
    
    show(number) {
        var x = this.i*w;
        var y = this.j*w;
        stroke(255);      
        if(number == 1){
            fill(0,0,0);
            this.color = "black";
            rect(x, y, w, w);
        }
        else if(number == 2){
            fill(255,0,255);
            this.color = "purple";
            current = this;
            rect(x, y, w, w);
            current = this;
        }
        else if(number == 3){
            fill(0,255,255);
            this.color = "blue";
            rect(x, y, w, w);
            objective = this;
        }
        else{
            fill(255,255,255);
            this.color = "white";
            rect(x, y, w, w); 
        } 
    }

    up(){
        var newCell;
        for(var k = 0; k < grid.length; k++){
            if(grid[k].i == current.i && grid[k].j == current.j - 1){
                newCell = grid[k];
                console.log(newCell);}}
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
            rect(x, y, w, w);
        }
    }
    right(){
        var newCell;
        for(var k = 0; k < grid.length; k++){
            if(grid[k].i == current.i + 1 && grid[k].j == current.j){
                newCell = grid[k];
                console.log(newCell);}}
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
            rect(x, y, w, w);
        }
    }
    down(){
        var newCell;
        for(var k = 0; k < grid.length; k++){
            if(grid[k].i == current.i && grid[k].j == current.j + 1){
                newCell = grid[k];
                console.log(newCell);}}
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
            rect(x, y, w, w);
        }   
    }
    left(){
        var newCell;
        for(var k = 0; k < grid.length; k++){
            if(grid[k].i == current.i - 1 && grid[k].j == current.j){
                newCell = grid[k];
                console.log(newCell);}}
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
            rect(x, y, w, w);
        }
    }
}

function setup() {
    let canvas = createCanvas(475,475);
    canvas.parent("canvasWrapper");
    cols =  floor(width/w);
    rows = floor(height/w);

    for (var i = 0; i < rows; i++){
        for (var j = 0; j < cols; j++){
            var cell = new Cell(i,j);
            grid.push(cell);
        }
    }
    for (var i = 0; i < grid.length; i++){
        grid[i].show(labirinth[i]);
    }

    document.querySelector("#buttonUp").addEventListener("click", current.up);
    document.querySelector("#buttonRight").addEventListener("click", current.right);
    document.querySelector("#buttonDown").addEventListener("click", current.down);
    document.querySelector("#buttonLeft").addEventListener("click", current.left);
}

