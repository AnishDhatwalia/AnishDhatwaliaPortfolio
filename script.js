
// navbar active sections giving then highlight

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("navbar a");

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach((links) => {
                links.classList.remove("active");
                document
                .querySelector("navbar a[href*=" + id + "]")
                .classList.add("active");
            });
        }
    });    
    // let page=document.getElementsByTagName(html);
    const header=document.querySelector(".header");
    header.classList.toggle('n-sticky',window.scrollY>50);
};

// lightMode, darkMode

let darkMode=document.querySelector('#darkMode-icon');
let isDark;
darkMode.onclick=()=>{
    darkMode.classList.toggle('bx-sun');
    document.body.classList.toggle('darkMode');
    if(darkMode.classList.contains('bx-sun'))
    {
        isDark="dark";
    }
    else{
        isDark="light";
    }
    localStorage.setItem("dark_Mode",JSON.stringify(isDark))
}
let getTheme=JSON.parse(localStorage.getItem("dark_Mode"));
if(getTheme==="dark")
{
    darkMode.classList.toggle('bx-sun');
    document.body.classList.toggle('darkMode');
}

// scroll reveal

ScrollReveal({
    reset:true,
    distance:'80px',
    delay:100,
    duration:1000
})

ScrollReveal().reveal('.home-content,.skills-content,.about-img,.heading',{origin:'left'});
ScrollReveal().reveal('.profession-content,.about-content,.skills-content,.contact-content,.projects-content',{origin:'right'});


// Responsive
//menu toggle

document.getElementById('bars').addEventListener('click',function(e){
    const icon=document.getElementById('bars');
    icon.classList.toggle('fa-times');
    console.log("menu");
    let content=document.getElementById('navbar');
    content.classList.toggle('navbar_hide');
});

// To hide the nav anchor tag as soon as clicked 

document.getElementById('navEle').addEventListener('click',function(e){
    const icon=document.getElementById('bars');
    icon.classList.toggle('fa-times');
    console.log("navbar");
    let content=document.getElementById('navbar');
    content.classList.toggle('navbar_hide');
});