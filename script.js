function myFunction() {
    var x = document.getElementById("nav-container");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}