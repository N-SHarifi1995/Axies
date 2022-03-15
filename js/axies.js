let items = document.querySelectorAll(".item");

items.forEach((ele) => {
    ele.addEventListener("mouseover", () => {
        showremover()
        ele.classList.add("show");
    });
    ele.addEventListener("mouseleave", showremover)

});

function showremover() {
    items.forEach((el) => {
        el.classList.remove('show')
    })
}