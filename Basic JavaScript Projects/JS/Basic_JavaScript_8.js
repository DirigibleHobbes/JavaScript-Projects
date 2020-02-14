function Numbers() {
    var part_1 = "Seventeen, "
    var part_2 = "forty two, "
    var part_3 = "elevenses, "
    var part_4 = "and a googol."
    var Numbers_in_a_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("SuperfluouslyElongatedWordForAlign").innerHTML = Numbers_in_a_sentence;
}
function slice_Method() {
    var Sentence = "We are just the universe expressing itself as human for a short while."
    var Section = Sentence.slice(0, 7)
    document.getElementById("Slice").innerHTML = Section
}
function string_Method() {
    var Giraffe = 4587 ;
    document.getElementById("Numbers_to_string").innerHTML = Giraffe.toString();
}
function precision_Method() {
    var K = 5748437.2345;
    document.getElementById("Precise").innerHTML = K.toPrecision(4);
}