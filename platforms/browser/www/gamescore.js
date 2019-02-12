function Scores() {
    console.log("local storage");
    for (var i = 0; i < localStorage.length; i++)   {
        console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");}
    }
    Show();

    function Show() {
    var len=localStorage.length;
    var points=[];
    var name, moves;
    for (var i = 0; i < len; i++) {
    // Dovhati ime i broj poteza
    name = localStorage.key(i);
    moves = localStorage.getItem(name);

    // Gurni grupirane vrijednosti na kraj array-a
    points.push([moves, name]);

    //Sortiraj po drugoj vrijednosti unutar array
    points = points.sort();
    }

    var toAdd = "";
    // Prodi kroz sve u points i spojit vrijednosti i dodaj na toAdd
    points.filter(point => toAdd += point[1] + " : "+ point[0] + "\n");

    // Nakon sta si sve spojia imaj ogroman string koji ces samo stavit kao innerHTML 
    document.getElementById('list').innerHTML = toAdd;
    console.log(toAdd);
    }


    function Delete() {
    localStorage.clear();
}