window.onresize = function(event) {
    let ventana=window.screen.width;
    if(ventana>=859){
        const menu__items = document.querySelector('.menu__items');
        menu__items.classList.remove('show');
    }
};

addEventListener('DOMContentLoaded' ,()=>{

    const menu__btn =document.querySelector('.menu__btn');
    if(menu__btn){

        menu__btn.addEventListener('click' , () =>{

            const menu__items = document.querySelector('.menu__items');
            menu__items.classList.toggle('show');

        })

    }
})

