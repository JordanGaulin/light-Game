const startBtn = document.getElementById('start-btn');  
const message = document.getElementById('message');
const lightBtn1 = document.getElementById('1');
const lightBtn2 = document.getElementById('2');
const lightBtn3 = document.getElementById('3');
const lightBtn4 = document.getElementById('4');
const lightBtn5 = document.getElementById('5');
const lightBtn6 = document.getElementById('6');
let clicked = false;
let randomNum = 0;
let turns = 0;


let currentLight = [lightBtn1, lightBtn2, lightBtn3, lightBtn4, lightBtn5, lightBtn6];



function getRndInteger(min, max) {
    randomNum = Math.floor(Math.random() * (max - min) ) + min;
    return randomNum;
  }




function lightOn(){
    getRndInteger(0, 6);
    clicked = false;
    turns++;
    console.log(turns);
    message.textContent = "";
    currentLight[randomNum].classList.add('light-on');
    setTimeout(lightOff, 1500);
}

function lightClicked(){
    currentLight[randomNum].classList.remove('light-on');
    currentLight[randomNum].classList.add('light-clicked');
    clicked = true;
    message.textContent = "Well done!";
    
}

function lightOff(){
    currentLight[randomNum].classList.remove('light-on');
    currentLight[randomNum].classList.remove('light-clicked');
    
}

function gameCycle(){
    startBtn.disabled = true;
    let lightTiming = setInterval(lightOn, 2000); 
}



startBtn.addEventListener('click', gameCycle);





