const loginAnimationText = document.querySelector(".login-animation-container p");
const appContainer = document.querySelector(".app-container");
let counterNumber = 1;
let loginAnimationTextFontSize = 16;
const counterInterval = setInterval(()=>{
      counterNumber++;
      loginAnimationTextFontSize++;
      loginAnimationText.style.fontSize = `${loginAnimationTextFontSize}px`
      loginAnimationText.innerHTML = `${counterNumber}%`
      if(counterNumber=== 100){
            clearInterval(counterInterval);
            loginAnimationText.style.display = "none";
            appContainer.style.display = "flex";
      }
},25);
