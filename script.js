function davidClicked() {
    const color1 = "pink";
    const color2 = "green";

    if (document.body.style.backgroundColor === color1) {
        document.body.style.backgroundColor = color2;
    } else {
        document.body.style.backgroundColor = color1;
    }
}
