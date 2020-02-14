function Call_Loop() {
    var Digit = "";
    var T = 1;
    while (T < 100) {
        Digit += T;
        T++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
var Instruments = ["Keyboard", "Kazoo", "Whistle", "Banjo", "Mandolin"];
var Content = "";
var M;
function for_Loop() {
    for (M = 0; M < Instruments.length; M++) {
        Content += Instruments[M] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
function array_Function() {
    var note_tone = []
    note_tone[0] = "C#";
    note_tone[1] = "Dm";
    note_tone[2] = "A";
    note_tone[3] = "Bb";
    note_tone[4] = "E";
    document.getElementById("Array").innerHTML = "The musical note you are 'hearing' is " + note_tone[0] + ".";
}
function constant_function() {
    const Candy = {type:"Gummy", brand:"Haribo", cost:"$1.49"};
    Candy.price = "$1.99";
    Candy.deliciousness = "100%"
    document.getElementById("constant").innerHTML = "The " + Candy.brand + " " + Candy.type + " is " + Candy.deliciousness + " delicious.";
}

var banana = "rotten";
document.write(banana);
{
    let banana = "ripe";
    document.write("<br>" + banana);
}
document.write("<br>" + banana);