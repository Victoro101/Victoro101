
//new fullpage('#total',{
//autoScrolling:true,
//navigation: true
//})
//$(document).ready(function() { $('#total').pagepiling(); });


gsap.from('nav', { duration: 1, y: '-100%', ease: 'power1' })
gsap.from('.logo', { duration: 1, opacity: 0, delay: 0.5 })
gsap.from('li', { duration: 1, opacity: 0, delay: 1, stagger: .2 })
gsap.from('.innerProfile h1', {
    scrollTrigger: {
        trigger: '.innerProfile h1', toggleActions: 'play play restart reset'
    }, duration: 1, x: '-110%', ease: 'power1',
})
gsap.from('.innerProfile h2', {
    scrollTrigger: {
        trigger: '.innerProfile h2', toggleActions: 'play play restart reset'
    }, duration: 1, x: '-110%', delay: .5, ease: 'power1',
})
gsap.from('.innerProfile h3', {
    scrollTrigger: {
        trigger: '.innerProfile h3', toggleActions: 'play play restart reset'
    }, duration: 1, x: '-110%', delay: 1, ease: 'power1',
})
gsap.from('.innerProfile p', {
    scrollTrigger: {
        trigger: '.innerProfile p', toggleActions: 'play play restart reset'
    }, duration: 1.5, opacity: 0, y: '20%', delay: 1.5, ease: 'power1', stagger: .5,
})
gsap.from('.picture', {
    scrollTrigger: {
        trigger: '.picture', toggleActions: 'play play restart reset'
    }, duration: 1, x: '110%', opacity: 0, ease: 'power1',
})
gsap.from('.innerProfile img', {
    scrollTrigger: {
        trigger: '.innerProfile img', toggleActions: 'play play restart reset'
    },
    duration: 1, opacity: 0, delay: 1, ease: 'power1',
})
//gsap.from('.innerProfile #hire', { duration: 1, scaleY: '1', height: '9vh', delay: 3, ease: 'power1', })

// for about 1.0
gsap.from('.title h3', {
    scrollTrigger: {
        trigger: '.title h3', toggleActions: 'play play restart reset',
    }, duration: 1, x: '-50%', ease: 'power1', stagger: .5
})
gsap.from('.title h1', {
    scrollTrigger: {
        trigger: '.title h3', toggleActions: 'play play restart reset',
    }, duration: 1, x: '-50%', delay: .3, ease: 'power1', stagger: .5, opacity: 0,
})
gsap.from('.partillustration .part1', { scrollTrigger: { trigger: '.partillustration .part1', toggleActions: 'play play restart reset', }, duration: 1, x: '-100%', ease: 'power1', stagger: .5, opacity: 0, })
gsap.from('.partillustration .part2', { scrollTrigger: { trigger: '.partillustration .part2', toggleActions: 'play play restart reset', }, duration: 1.5, opacity: 0, ease: 'power1', stagger: .5 })
gsap.from('.partillustration .part3', { scrollTrigger: { trigger: '.partillustration .part3', toggleActions: 'play play restart reset', }, duration: 1.5, opacity: 0, ease: 'power1', stagger: .5 })
// partcontent
gsap.from('.partcontent', { scrollTrigger: { trigger: '.partcontent', toggleActions: 'play play restart reset', }, duration: 1, x: '80%', ease: 'power1', stagger: .5, opacity: 0, })

// devtools
gsap.from('.devtools', { scrollTrigger: { trigger: '.devtools', toggleActions: 'play play restart reset' }, duration: 1.5, x: '-20%', ease: 'bounce', opacity: 0, })


//story main
gsap.from('.story-main h3', {
    scrollTrigger: {
        trigger: '.story-main h3', toggleActions: 'play play restart ',
    }, duration: 4, opacity: 0, ease: 'power1',
})

gsap.from('.story-main h2', {
    scrollTrigger: {
        trigger: '.story-main h2', toggleActions: 'play play restart ',
    }, duration: 4, opacity: 0, ease: 'power1',
})

gsap.from('.story-main p', {
    scrollTrigger: {
        trigger: '.story-main p span', toggleActions: 'play play restart reset'
    }, duration: 1, opacity: 0, y: '30%', ease: 'power1', stagger: .3,
})
gsap.from('.storypic', {
    scrollTrigger: {
        trigger: '.storypic', toggleActions: 'play play restart reset'
    }, duration: 1.5, opacity: 0, x: '100%', ease: 'power1',
})
gsap.from('.main-work .work1', { scrollTrigger: { trigger: '.main-work .work1', toggleActions: 'play play restart reset' }, duration: 1, opacity: 0, ease: 'power1', y: '20%', })

gsap.from('.main-work .work2', { scrollTrigger: { trigger: '.main-work .work2', toggleActions: 'play play restart reset' }, duration: 1, opacity: 0, ease: 'power1', y: '20%', delay: .2 })
gsap.from('.main-work .work3', { scrollTrigger: { trigger: '.main-work .work3', toggleActions: 'play play restart reset' }, duration: 1, opacity: 0, ease: 'power1', y: '20%', delay: .5 })

gsap.from('.projects .pro3', { scrollTrigger: { trigger: '.projects .pro3', toggleActions: 'play play restart reset' }, duration: 1, opacity: 0, ease: 'power1', y: '10%', delay: 1 })

gsap.from('.projects .pro1', { scrollTrigger: { trigger: '.projects .pro2', toggleActions: 'play play restart reset' }, duration: 1, opacity: 0, ease: 'power4', y: '10%', })
gsap.from('.projects .pro2', { scrollTrigger: { trigger: '.projects .pro2', toggleActions: 'play play restart reset' }, duration: 1, opacity: 0, ease: 'power1', y: '10%', delay: .5 })

gsap.from('.projects .pro4', { scrollTrigger: { trigger: '.projects .pro4', toggleActions: 'play play restart reset' }, duration: 1, opacity: 0, ease: 'power1', y: '10%', })















// xmark
var closeIcon = document.querySelector("nav ul");
var links = document.querySelectorAll("li>a");
var width = window.matchMedia("(max-width:425px)")
var width2 = window.matchMedia("(max-width:900px)")
// var showButton=document.querySelector()
function hideMenu() {
    closeIcon.style.transform = "scaleX(0)"
    // gsap.from('nav ul', { duration: 1, scaleX: '0', ease: 'power1' }

}
if (width.matches) {
    links.forEach(function (el) {
        el.addEventListener('click', function () {
            closeIcon.style.transform = "scaleX(0)"
        })
    })
} else {
    removeEventListener;
}
if (width2.matches) {
    links.forEach(function (el) {
        el.addEventListener('click', function () {
            closeIcon.style.transform = "scaleX(0)"
        })
    })
} else {
    removeEventListener;
}


function showMenu() {


    closeIcon.style.transform = "scaleX(1)";
    // gsap.from('nav ul', { scaleX: '1', ease: 'power1' })

    gsap.from('li', { duration: 1, opacity: 0, stagger: .2 })
    // closeIcon.style.transition = "all ease .5s";

}

// slider

var slider = document.querySelector(".storypic img")
var images = new Array(
    "victor1.jpeg",
    "victor2.jpeg",
    "Victor3.jpeg",
    "Victor4.jpg",
);
var length = images.length;
var i = 0;

function slide() {
    if (i > length - 1) {
        i = 0;
    }
    slider.src = images[i];
    i++;
}
setInterval(slide, 2000);
slide();



