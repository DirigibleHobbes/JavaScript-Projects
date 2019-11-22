function flight_Dictionary() {
    var Plane = {
        Model: "Spitfire",
        Engine: "Rolls Royce",
        Country: "UK",
        Manufactured: "1935"
    };
    delete Plane.Engine;
    document.getElementById("Dictionary").innerHTML= Plane.Engine;
}