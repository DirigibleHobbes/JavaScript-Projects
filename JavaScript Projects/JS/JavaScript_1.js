function Nut_Function() {
    var Nut_Output;
    var Nuts = document.getElementById("Nut_Input").value;
    var Nut_String = " is a delicious nut!";
    switch(Nuts) {
        case "Macadamia":
            Nut_Output = "Macadamia" + Nut_String;
        break;
        case "Walnut":
            Nut_Output = "Walnut" + Nut_String;
        break;
        case "Almond":
            Nut_Output = "Almond" + Nut_String;
        break;
        case "Brazil":
            Nut_Output = "Brazil" + Nut_String;
        break;
        default:
        Nut_Output = "Please emulate any spelling errors from the list in your answer."       
    }
    document.getElementById("Output").innerHTML = Nut_Output;
}