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
    window.location.href="../../login page/login.html";
}
function booking(){
    window.location.href="../../booking page/book.html"
}

function showmore(){
    let images = document.querySelectorAll(".showables");
    
    images.forEach((i)=>{
        img = i.getAttribute("class");
        if(img=="images hide showables"){
            i.setAttribute('class',"images show showables");
            document.querySelector(".showmorebtn").innerHTML = "Show Less";
        }
        if(img=="images show showables"){
            i.setAttribute('class',"images hide showables");
            document.querySelector(".showmorebtn").innerHTML = "Show more";
        }
    })
    
}