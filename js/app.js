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

function barra(){


    addEventListener('scroll', () => {

        let ancho=window.screen.width;
    
        console.log(ancho);
    
        let scr=window.scrollY;
        if(ancho>=859){
    
            if(scr<20){
                document.getElementById('cambiacolor').style.backgroundColor = 'transparent';
                document.getElementById('cambiacolor').style.transition = 'background-color 1s ease';
                document.getElementById('cambiacolor').style.boxShadow = 'none';
            }else{
                document.getElementById('cambiacolor').style.backgroundColor = '#ffffff';
                document.getElementById('cambiacolor').style.transition = 'background-color 1s ease';
                document.getElementById('cambiacolor').style.boxShadow = '5px 0 10px rgba(0, 0, 0, .6)';
            }
        
        }
        
    
    })


}



