const h1 = document.querySelector("div.hello:first-child h1");
let click_num = 0;



function handleTitleClick() {
    console.log("title was clicked!");
    h1.style.color = "blue";
    click_num = click_num + 1;
    h1.innerHTML = click_num
}

function handleMouseEnter() {
    h1.innerHTML = "Mouse is here!";
}

function handleMouseLeave() {
    h1.innerHTML = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

h1.onclick = handleTitleClick;
h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", function() {
    alert("copier!");
});
window.addEventListener("offline", function() {
    alert("SOS no WIFI");
});
window.addEventListener("online", function() {
    alert("ALL GOOD");
});