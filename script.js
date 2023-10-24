var score = 0;
var timer = 60;
var hitVal;
var number;

document.querySelector('#panel-bottom').
    addEventListener('click',
    function(dets){
        var clickedNum = Number(dets.target.textContent);
        if(clickedNum === hitVal){
            makeBubbles(); 
            increaseScore();
            generateHit();
            document.querySelector('#panel-bottom').style.backgroundColor = '#fff';
            
        }else{
            document.querySelector('#panel-bottom').style.backgroundColor = 'rgb(255, 160, 160)';
        }
    });


function makeBubbles(){
    var clutter = "";
    for (var i = 0; i <= 197; i++) {
         number = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${number}</div>`;
    }
    document.querySelector('#panel-bottom').innerHTML = clutter;
}

function increaseScore(){
    score += 10;
    document.querySelector('#score').innerHTML = score;
}

function runTimer(){
    var timerVal = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector('#timer').innerHTML = timer;
        }else{
            document.querySelector('#panel-bottom').innerHTML = `<h1>GAME OVER!</h1>`
            clearInterval(timerVal);
        }
    }, 1000);
}

function generateHit(){
    hitVal = Math.floor(Math.random() * 10);
    document.querySelector('#hit').innerHTML = hitVal;
}


makeBubbles();
runTimer();
generateHit();
