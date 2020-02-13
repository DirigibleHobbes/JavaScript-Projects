function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById ("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Noodles(Consistency, Length, Composition) {
    this.Noodles_Consistency = Consistency;
    this.Noodles_Length = Length;
    this.Noodles_Composition = Composition;
}

var Udon = new Noodles("Firm", "20cm", "wheat");
function myNoodles() {
    document.getElementById ("New_and_This").innerHTML =
    "Udon noodles are " + Udon.Noodles_Consistency + ", " + Udon.Noodles_Length + " long, and made of " + Udon.Noodles_Composition + ".";
}
function count_FunctionAhAhAh() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 16;
        function Plus_five() {Starting_point += 5;}
        Plus_five();
        return Starting_point;
    }
}