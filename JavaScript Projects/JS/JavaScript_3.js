function displayType(guitar) {
    var guitarType = guitar.getAttribute("data-guitar-type");
    alert(guitar.innerHTML + " plays music with a " + guitarType + ".");
}