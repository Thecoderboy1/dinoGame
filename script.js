score = 0;
cross = true;
document.documentElement.requestFullscreen = document.documentElement.requestFullscreen || document.documentElement.mozRequestFullscreen || document.documentElement.webkitRequestFullscreen || document.documentElement.msRequestFullscreen;

document.addEventListener('DOMContentLoaded', function() {
  var fullscreenElement = document.documentElement;

  fullscreenElement.requestFullscreen();

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.exitFullscreen();
    }
  });
});

function startGame() {
  obstacleAni1 = document.querySelector('.obstacleAni');
var dinopic = document.getElementById('dino-pic');
document.onkeydown = function(e) {
    if (e.keyCode === 38) {
      dino = document.querySelector('.daino');
      
      dino.classList.add('animateDino');
       
      setTimeout(() => {
        dino.classList.remove('animateDino');
      },700);
    }
    if (e.keyCode === 39) {
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinox + 112 + 'px';
      }
      if (e.keyCode === 37) {
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinox -112) + 'px';
      }
  };
  
  setInterval(() => {
    dino = document.querySelector('.daino');
    gameover = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
  
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
    offsetx = Math.abs(dx - ox);
    offsety = Math.abs(dy - oy);
    
    if (offsetx < 50 && offsety < 5) {
      gameover.style.visibility = 'visible';
      obstacle.classList.remove('obstacleAni');
    

    }
    else if(offsetx < 145 && cross){
        score+=1;
        updateScore(score)
        cross= false;
        setTimeout(() => {
            cross= true;
        }, 1000);
        setTimeout(() => {
          aniDur =  parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
          newDur = aniDur - 0.1;
        
          obstacle.style.animationDuration =  + 's';

        }, 800);


    }
  }, 10);
  if(score >10){
     obstacleAni1.style.animationDuration = 3 + 's';
  }
  function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score;
  }
 
}

var myButton = document.getElementById('my-button');

document.addEventListener('click', function() {
   game_window = document.querySelector('.gamecontainer');
   main_window = document.getElementById('main')
   game_window.style.display = "block";
   main_window.style.display = "none";
   startGame()
});
