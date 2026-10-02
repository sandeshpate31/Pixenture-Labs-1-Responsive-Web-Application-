function menuopen(){
    let menubtn = document.querySelector(".links").getAttribute('class');
    let hamburger = document.querySelector(".hamburger");
    if(menubtn=="links closed"){
        document.querySelector(".links").setAttribute('class','links');
        hamburger.setAttribute('class','fa-solid fa-close hamburger');
    }
    else{
        document.querySelector(".links").setAttribute('class','links closed');
        hamburger.setAttribute('class','fa-solid fa-bars hamburger');
    }
     
} 

let logo = document.querySelector(".animated-logo");
let text = document.querySelector(".animated-logo").textContent;

setInterval(show,3500)
function show(){
    typewriter(logo,text);
}

function typewriter(element,text,i=0){
    if(i==0){
        element.textContent="";
    }
    element.textContent+=text[i];

    if(i === text.length -1){
        return;
    }
    setTimeout(() => typewriter(element, text, i+1), 150);

}

function loginredirect(){
    window.location.href="login page/login.html";
}
function about(){
    window.location.href="about us page/aboutus.html";
}