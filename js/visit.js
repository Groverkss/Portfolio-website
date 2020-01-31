var visitCounter = localStorage.getItem("on_load_counter");
if (visitCounter == null) {
    visitCounter = 0;
}

function showVisit() {
    document.getElementById("visitBar").innerHTML = "Number of visitors: ";
    document.getElementById("visitBar").innerHTML += visitCounter;
    document.getElementById("visitBar").classList.add("show");
    setTimeout(function () {document.getElementById("visitBar").classList.remove("show")}, 3000);
}


document.addEventListener("DOMContentLoaded", function () {
    visitCounter++; 
    localStorage.setItem("on_load_counter", visitCounter);
});