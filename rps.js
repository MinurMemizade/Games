let result = '';
        let score=JSON.parse(localStorage.getItem('score')) || {
          Wins:0,
          Loses:0,
          Ties:0
          
        }


        function scoreCheck()
        {
            if (result==='You win.')
            {
                score.Wins+=1;
            }
            else if (result==='You lose.')
            {
                score.Loses+=1;
            }
            else if (result==='Tie.')
            {
                score.Ties+=1;
            }
            
        }
        let isAutoPlaying=false;
        let intervalID;

        function autoPlay ()
        {
          if (!isAutoPlaying)
          {
            intervalID = setInterval (function () {
              const playerMove=pickComputerMove();
              playGame(playerMove)
            }, 1000)
            isAutoPlaying=true;
          }
          else
          {
            clearInterval(intervalID)
            isAutoPlaying=false;
          }
          
        }

        document.body.addEventListener('keydown',(event)=>
        {
          if (event.key==='r')
          {
            playGame('rock')
          }
          else if (event.key==='p')
          {
            playGame('paper')
          }
          else if (event.key==='s')
          {
            playGame('scissors')
          }
        })
        

      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
          

        }

        if (result==='You win.')
            {
                score.Wins+=1;
            }
            else if (result==='You lose.')
            {
                score.Loses+=1;
            }
            else if (result==='Tie.')
            {
                score.Ties+=1;
            }
            localStorage.setItem('score', JSON.stringify(score));
            updateScoreElement();

        document.querySelector('.js-result').innerHTML=result;
        document.querySelector('.js-moves').innerHTML=`You <img src="${playerMove}-emoji.png" class="emoji">
        <img src="${computerMove}-emoji.png " class="emoji"> Computer.` ;
      }
      updateScoreElement();
      

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }

      function updateScoreElement()
      {
        document.querySelector('.js-score').innerHTML=`Wins: ${score.Wins}, Loses: ${score.Loses}, Ties: ${score.Ties}.`
      }
      
      
      