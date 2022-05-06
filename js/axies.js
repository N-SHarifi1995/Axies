let items = document.querySelectorAll(".item");
let coverr = document.querySelector(".coverr");

setTimeout(() => {
    coverr.style.display = 'none';
    document.body.scrollTop = 0;
    document.body.style.overflow = 'auto'

}, 4000);

items.forEach((ele) => {
    ele.addEventListener("mouseover", () => {
        showremover();
        ele.classList.add("show");
    });
    ele.addEventListener("mouseleave", showremover);
});

function showremover() {
    items.forEach((el) => {
        el.classList.remove("show");
    });
}
///////////////////////sliderpart////////////////
let carts = document.querySelectorAll(".cart");
console.log(carts)
carts.forEach((cart) => {
    cart.addEventListener("mouseover", () => {
        clearInterval(player);
    });
    cart.addEventListener("mouseout", () => {
        player = setInterval(play, 8);
    });
});
let livpart = document.querySelector(".carts");

let player = setInterval(play, 10);

function play() {
    let x = livpart.scrollWidth - livpart.clientWidth;
    if (livpart.scrollLeft > x - 1) {
        livpart.scrollLeft -= x;
    } else {
        livpart.scrollLeft += 1;
    }
}
let leftbtn = document.querySelector(".arrow-left");
let rightbtn = document.querySelector(".arrow-right");
leftbtn.addEventListener('click', () => {
    livpart.scrollLeft -= 50
})
rightbtn.addEventListener('click', () => {
    livpart.scrollLeft += 50
})