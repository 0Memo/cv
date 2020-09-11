var menu1 = document.getElementById('menu1'); 
    menu2 = document.getElementById('menu2');
    body = document.getElementsByTagName('body')[0];

var count = 0;
var responsiveMenu1 = function(){
    if(window.matchMedia("(max-width: 768px)").matches){
        if(count == 0){
            menu1.style.left= '0';
            menu1.style.borderTop='1px outset white';
            body.style.paddingTop="110px";
            count = 1;
        }
        else{
            count = 1;
            menu1.style.left= '100%';
            menu2.style.right= '100%';
            body.style.paddingTop="70px";
            count = 0;
        }
    }    
}

document.getElementsByClassName("icon-bars")[0].addEventListener("click",responsiveMenu1);

var count = 0;
var responsiveMenu2 = function(){
    if(window.matchMedia("(min-width: 768px)").matches){
        if(count == 0){
            menu1.style.left= '100%';
            body.style.paddingTop= '70px';
            count = 1;
        }
        else{
            count = 1;
            menu1.style.left= '100%';
            body.style.paddingTop= '70px';
            count = 0;
        }
    }    
}

var typed = new Typed("#typed",{
    strings: ["Html 5","CSS 3", "JavaScript", "Python", "PhP", "MySQL","Adobe Premiere Pro", "Word", "Excel", "PowerPoint"],
    typeSpeed: 100,
    backSpeed:50,
    loop: true
});