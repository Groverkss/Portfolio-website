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