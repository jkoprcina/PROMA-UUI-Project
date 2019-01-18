
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
"1000101010000000001" + 
"1111111111111111111";

var current, objective;

function setup() {
    createCanvas(475,475);
    cols =  floor(width/w);
    rows = floor(height/w);

    for (var i = 0; i < rows; i++){
        for (var j = 0; j < cols; j++){
            var cell = new Cell(i,j);
            grid.push(cell);
        }
    }
}

function draw(){
    background(51);
    for (var i = 0; i < grid.length; i++){
        grid[i].show(labirinth[i]);
    }
}

function Cell(i,j) {
    this.i = i;
    this.j = j;

    this.show = function(number) {
        var x = this.i*w;
        var y = this.j*w;
        stroke(255);      
        if(number == 1){
            fill(0,0,0);
            rect(x, y, w, w);
        }
        else if(number == 2){
            fill(255,0,255);
            rect(x, y, w, w);
        }
        else{
            fill(255,255,255);
            rect(x, y, w, w); 
        } 
    }
}