// Menu toggler
document.getElementById("menu-toggler").addEventListener("click", function() {
    document.getElementById("toggler").classList.toggle("active");
})

// Go to Top button
function goTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}