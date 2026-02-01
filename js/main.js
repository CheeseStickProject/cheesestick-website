var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        this.document.getElementById("navbar-bg").style.top = "-20px";
    } else {
        this.document.getElementById("navbar-bg").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
}