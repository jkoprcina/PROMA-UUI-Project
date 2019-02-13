function Scores() {
    console.log("local storage");
    for (var i = 0; i < localStorage.length; i++)   {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
    }
}
Show();

function Show() {
var len=localStorage.length;
var points=[];
var name, moves;
for (var i = 0; i < len; i++) {
    name = localStorage.key(i);
    moves = localStorage.getItem(name);
    points.push([moves, name]);
    points = points.sort();
}
var toAdd = "";
points.filter(point => toAdd += point[1] + " : "+ point[0] + "\n");

document.getElementById('list').innerHTML = toAdd;
console.log(toAdd);
}