function MathFunction() {
var x=5, y=6, z=x+y
alert(z)
}
function Subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math1").innerHTML = "5 - 2 = " + Subtraction;
}
function Multiplication_Function() {
    var simple_Math = 12 * 12;
    document.getElementById("Math2").innerHTML = "12 x 12 =" + simple_Math;
}
function Division_Function() {
    var simple_Math = 20 / 4;
    document.getElementById("Math3").innerHTML = "20 / 4 =" + simple_Math;
}
function Math_With_Math() {
    var simple_Math = (25 + 4) *5 / 2 - 35;
    document.getElementById("Math4").innerHTML = "Twenty Five plus Four, multiplied by Five, divided by Two, then subtracted by Thirty Five equals: " + simple_Math;
}
function Modulus() {
    var simple_Math = 100 % 3;
    document.getElementById("Math5").innerHTML = "Dividing 100 by 3 gives a remainder of: " + simple_Math;
}
function Negate_Operator() {
    var A = 7;
    document.getElementById("Math6").innerHTML = -A;
}
/*These are displayed at the top of the page, consecutively, with no text*/
{var Z = 5;
Z--;
document.write(Z);}

{var Z = 5;
Z++;
document.write(Z);}
/*End of no-text numbers (4 & 6)*/

function Window_Alert() {
    window.alert(Math.random());
}

function Pi() {
    window.alert(Math.PI);
}