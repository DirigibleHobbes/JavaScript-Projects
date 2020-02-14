var global_variable = "meaning of life";
function Counting() {
    document.getElementById("BrokenCode").innerHTML = Count();
    function Count() {
        var Starting_point = 35;
        function Plus_seven() {Starting_point += 7;}
        //The following seven is deliberately spelled incorrectly.//
        Plus_seen();
        return Starting_point;
    }
}
function ThisEvent() {
    if (new Date().getHours() <18) {
        document.getElementById("An_ID_To_Reference").innerHTML = "Have you thought about dinner?";
    }
}
function ThatEvent() {
    if (new Date().getDate() <15) {
        document.getElementById("Another_ID_To_Reference").innerHTML = "You still have a whole month ahead of you!";
    }
}

function Height_Function() {
    Height = document.getElementById("Height").value;
    if (Height >= 6) {
        Compliment = "There is never a lost car when you're around."
    }
    else {
        Compliment = "You would make a fine astronaut!"
    }
    document.getElementById("How_tall_are_you?").innerHTML = Compliment;
}
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}