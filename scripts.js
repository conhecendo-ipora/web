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
