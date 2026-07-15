/*==========================
 PRELOADER
==========================*/

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    if(preloader){
        preloader.style.display = "none";
    }
});

/*==========================
 AOS Animation
==========================*/

AOS.init({
    duration:1000,
    once:true
});

/*==========================
 Typing Animation
==========================*/

new Typed(".typing",{

    strings:[
        "AI & Data Science Student",
        "Web Developer",
        "Python Enthusiast",
        "Frontend Developer"
    ],

    typeSpeed:80,

    backSpeed:50,

    backDelay:1500,

    loop:true

});

/*==========================
 Back To Top Button
==========================*/

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

    if(document.documentElement.scrollTop>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

}

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

/*==========================
 Dark Mode
==========================*/

const theme=document.getElementById("theme");

theme.onclick=function(){

document.body.classList.toggle("light");

theme.classList.toggle("fa-sun");

theme.classList.toggle("fa-moon");

}

/*==========================
 Mobile Menu
==========================*/

const menu=document.getElementById("menu");

const nav=document.querySelector("nav");

menu.onclick=function(){

    if(nav.style.display==="flex"){

        nav.style.display="none";

    }

    else{

        nav.style.display="flex";

        nav.style.flexDirection="column";

        nav.style.position="absolute";

        nav.style.top="80px";

        nav.style.right="20px";

        nav.style.padding="20px";

        nav.style.background="#111827";

        nav.style.borderRadius="10px";

    }

}

/*==========================
 Vanilla Tilt
==========================*/

VanillaTilt.init(

document.querySelectorAll(

".project-card,.certificate-card,.achievement-card,.stat-card"

),

{

max:10,

speed:400,

glare:true,

"max-glare":0.2

}

);

/*==========================
 Particles
==========================*/

tsParticles.load("particles-js",{

background:{},

particles:{

number:{

value:50

},

color:{

value:"#7c3aed"

},

links:{

enable:true,

distance:150,

color:"#7c3aed",

opacity:0.4

},

move:{

enable:true,

speed:2

},

size:{

value:3

}

}

});