const loginAnimationText = document.querySelector(".login-animation-container p");
let counterNumber = 1;
let loginAnimationTextFontSize = 16;
const counterInterval = setInterval(()=>{
      counterNumber++;
      loginAnimationTextFontSize++;
      loginAnimationText.style.fontSize = `${loginAnimationTextFontSize}px`
      loginAnimationText.innerHTML = `${counterNumber}%`
      if(counterNumber=== 100)clearInterval(counterInterval);
                  
},25);
