window.addEventListener("scroll", ()=>{
    let headerTop = document.getElementById("headerTop");
    headerTop.classList.toggle("show", window.scrollY > 0);
})


