createStar();
function createStar() {
    for (var a = 0; a <= 50; a++) {
        var b = this.newStar();
        b.style.top = Math.random() * 100 + "%";
        b.style.left = Math.random() * 100 + "%";
        const size = Math.random() * 5 + 5;
        b.style.width = `${size}px`;
        b.style.height = `${size}px`;
        b.animation = "none";
        document.body.appendChild(b)
    }
}
function newStar() {
    var a = document.createElement("div");
    a.innerHTML = '<div class="star">';
    return a.firstChild
};

