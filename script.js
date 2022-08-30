var loader = document.getElementById('loading');
window.addEventListener("load",function(){
  loader.style.display = "none";
})



var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


// $(document).ready(function(){
//   $('.first_para').waypoint(function(direction){
//     $('.first_para').addClass('animate_animated animate__fadeInLeft')
//   },
//   {
//     offset: '400px'
//   });
// });

VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 1
})

const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}
document.getElementById("demo").innerHTML = greeting;

// let navbar = document.querySelector(".navbar");
// let barsBtn = navbar.querySelector(".head .bars");

// barsBtn.addEventListener("click", () => {
//   navbar.classList.toggle("active");
// })

// ----------------------------- game ------------------------------------------

// Selecting elements.
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');

// Storing the scores.
let computerScore = 1;
let playerScore = 1;

const rockIcon = "fas fa-hand-rock";
const paperIcon = "fas fa-hand-paper";
const scissorsIcon = "fas fa-hand-scissors";

const randomClasses = [rockIcon, paperIcon, scissorsIcon];
const text = document.getElementById('demo3');
const text2 = document.getElementById('demo2');

const tie = () => {
  text.innerHTML = "It's a Tie ! ";
  text.style.color = 'orange';
  text2.innerHTML = text.innerHTML;
  text2.style.color = 'orange';
}

const win = () => {
  text.innerHTML = "It's a Win ! ";
  text.style.color = 'rgb(1, 146, 1)';
  text2.innerHTML = text.innerHTML;
  text2.style.color = 'rgb(1, 146, 1)';
}

const lose = () => {
  text.innerHTML = "You Loosed ! ";
  text.style.color = 'red';
  text2.innerHTML = text.innerHTML;
  text2.style.color = 'red';
}

// Game Functionality.
const game = () => {
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Random rock paper scissor for the computer and clicked ones for the player
      let clickedBtn = e.target.className;
      showIcon.className = clickedBtn;
      let randomNum = Math.floor(Math.random() * randomClasses.length);
      computerShowIcon.className = randomClasses[randomNum];

      // If it's a Tie .
      if (showIcon.className === computerShowIcon.className) {
        pScore.innerHTML = pScore.innerHTML;
        cScore.innerHTML = cScore.innerHTML;
        tie();
      }

      // if it's not a Tie.
      else if (showIcon.className === rockIcon && computerShowIcon.className === scissorsIcon) {
        pScore.innerHTML = playerScore;
        playerScore++;
        win();
      } else if (showIcon.className === rockIcon && computerShowIcon.className === paperIcon) {
        cScore.innerHTML = computerScore;
        computerScore++;
        lose();
      } else if (showIcon.className === paperIcon && computerShowIcon.className === scissorsIcon) {
        cScore.innerHTML = computerScore;
        computerScore++;
        lose();
      } else if (showIcon.className === paperIcon && computerShowIcon.className === rockIcon) {
        pScore.innerHTML = playerScore;
        playerScore++;
        win();
      } else if (showIcon.className === scissorsIcon && computerShowIcon.className === rockIcon) {
        cScore.innerHTML = computerScore;
        computerScore++;
        lose();
      } else if (showIcon.className === scissorsIcon && computerShowIcon.className === paperIcon) {
        pScore.innerHTML = playerScore;
        playerScore++;
        win();
      }
    });
  });
}

// Run the game.
game();



