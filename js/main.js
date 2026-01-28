var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        this.document.getElementById("navbar").style.top = "0";
    } else {
        this.document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}