var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    if (window.innerWidth <= 1400) {
        return;
    }
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        this.document.getElementById("navbar-bg").style.top = "-20px";
    } else {
        this.document.getElementById("navbar-bg").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
}