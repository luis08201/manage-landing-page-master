let btnBurger = document.getElementById("btnBurger");

btnBurger.addEventListener("click", () =>{
    btnBurger.classList.toggle("active");

    nav.classList.toggle("show");

    let headerBars = document.querySelectorAll(".header__top--bar");

    headerBars.forEach(bar =>{
        if (btnBurger.classList.contains("active")) {
          bar.classList.toggle("active");
        }else{
            bar.classList.remove("active");
        }
    })
})