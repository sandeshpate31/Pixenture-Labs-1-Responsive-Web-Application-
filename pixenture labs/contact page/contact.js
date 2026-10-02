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
function loginredirect(){
    window.location.href="../login page/login.html";
}

// to show submit pop up
let myform = document.querySelector('.default-form');
myform.addEventListener('submit',(e)=>{
    let popup = document.querySelector(".popup-cnt");
    popup.style.display = "flex";
    e.preventDefault();
    let btn = document.querySelector(".popup-btn").addEventListener('click',(c)=>{
        popup.style.display = "none";
        myform.submit();
    })
})
