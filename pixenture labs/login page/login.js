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
const signupButton = document.getElementById("signup");
      const signinButton = document.getElementById("signin");
      const container = document.getElementById("container");
      signupButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
      });
      signinButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
      });

