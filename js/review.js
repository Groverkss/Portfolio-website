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
    var rangeAns;
    if (rangeInt == 1) {
        rangeAns = "Beginner"
    } else if (rangeInt == 2) {
        rangeAns = "Intermediate";
    } else {
        rangeAns = "Proficient";
    }

    
    document.getElementById("table-body").innerHTML += "<tr><td>" + name + "</td><td>" + skill + "</td><td>" + rangeAns + "</td><td>" + comment + "</td></tr>";
    document.getElementById("form-name").value = "";
    document.getElementById("form-skill").value = "";
    document.getElementById("form-range").value = "";
    document.getElementById("form-comments").value = "";
    
    var obj = {
        name: name,
        skill: skill,
        range: rangeAns,
        comment: comment
    };
    

    var retdat = localStorage.getItem("JSONdat");
    var data = JSON.parse(retdat);
    if(data == null){
    data = [];
    }
    data.push(obj);
    console.log(obj);
    console.log(data);
    localStorage.setItem("JSONdat", JSON.stringify(data));
}

document.addEventListener("DOMContentLoaded", function() {
    var retdat = localStorage.getItem("JSONdat");
    var data = JSON.parse(retdat);
    if(data == null){
    data = [];
    }

    data.forEach(function(obj) {
        document.getElementById("table-body").innerHTML += "<tr><td>" + obj.name + "</td><td>" + obj.skill + "</td><td>" + obj.range + "</td><td>" + obj.comment + "</td></tr>";
    })
})