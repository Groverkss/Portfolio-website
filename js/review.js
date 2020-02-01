var revealState = false;

function revealMe() {
    if (revealState == false) {
        document.getElementById("form-overlayid").style.visibility = "visible";
        revealState = true;
    } else {
        document.getElementById("form-overlayid").style.visibility = "hidden";
        revealState = false;
    }
}

function createNewValue() {
    revealMe();
    var name = document.getElementById("form-name").value;
    var skill = document.getElementById("form-skill").value;
    var range = document.getElementById("form-range").value;
    var rangeInt = parseInt(range);
    var comment = document.getElementById("form-comments").value;
    document.getElementById("table-body").innerHTML += "<tr><td>" + name + "</td><td>" + skill + "</td><td>" + rangeInt + "</td><td>" + comment + "</td></tr>";
    document.getElementById("form-name").value = "";
    document.getElementById("form-skill").value = "";
    document.getElementById("form-range").value = "";
    document.getElementById("form-comments").value = "";
}