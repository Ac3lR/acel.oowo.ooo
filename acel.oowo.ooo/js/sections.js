function showshouts() {
    document.getElementById("urls").style.display = "none";
    document.getElementById("shouts").style.display = "block";
    document.getElementById("url_label").style.textDecoration = "none";
    document.getElementById("premium_label").style.textDecoration = "underline";
}

function showurls() {
    document.getElementById("urls").style.display = "block";
    document.getElementById("shouts").style.display = "none";
    document.getElementById("url_label").style.textDecoration = "underline";
    document.getElementById("premium_label").style.textDecoration = "none";
}