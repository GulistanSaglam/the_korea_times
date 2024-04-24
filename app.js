const goUp = document.getElementsByClassName('go_up')[0];

window.addEventListener("scroll", function () {
    const distance = this.window.scrollY;
    // console.log(distance);
    if (distance > 800) {
        goUp.classList.add("go_upShow");
    } else {
        goUp.classList.remove("go_upShow");
    }
});

goUp.addEventListener("click", function () {
    window.scrollTo(0, 0);
})