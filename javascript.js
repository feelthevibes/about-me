function myFunction() {
    var x = document.getElementById("jsMenu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
