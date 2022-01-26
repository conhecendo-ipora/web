const header = document.querySelector("header");
const menu_Out = document.querySelector(".menu-options-out");
const btn_menu = document.querySelector(".btn-menu");


btn_menu.addEventListener("click", ()=>{

    if(menu_Out.classList.contains("active")){

        menu_Out.classList.remove("active");
        
    }else{
        menu_Out.classList.add("active");
    }
})

/* Carrosel */

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

var timg = document.getElementsByClassName("tamanho")[0].width;

window.addEventListener("resize",function(){
    timg = document.getElementsByClassName("tamanho")[0].width;     
});


let idx = 0;

function carrosel(){
    idx++;



    if(idx > img.length-1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * timg}px)`;
};

setInterval(carrosel, 1800);