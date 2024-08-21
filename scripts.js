let scoreStr = localStorage.getItem('Score');
    let score;
     resetScore(scoreStr);
    function resetScore(scoreStr) {
      score = scoreStr? JSON.parse(scoreStr) : {
      win: 0,
      lose: 0,
      tie: 0,
  }
    score.displayScore = function() {
        return ` Score:  Won : ${score.win} , Lost : ${score.lose}  ,Tie : ${score.tie}`
      };

      showResult();
    }
   

    function generateComputerChoice() {
      let randomNumber = Math.random() * 3;
      if (randomNumber <= 1) {
        return 'Bat';
      }
      else if (randomNumber <= 2) {
        return 'Ball';
      }
      else {
        return 'Stump';
      }
    }

    function getResult(userMove, computerMove) {
      if (userMove === 'Bat') {
        if (computerMove === 'Ball') {
          score.win++;
          return `You have won`;
        }
        else if (computerMove === 'Bat') {
          score.tie++;
          return `It's a tie`;
        }
        else {
          score.lose++;
          return 'Computer has won';
        }

      }
      else if (userMove === 'Ball') {
        if (computerMove === 'Ball') {
          score.tie++;
          return `It's a tie`;
        }
        else if (computerMove === 'Bat') {
          score.lose++;
          return 'Computer has won';
        }
        else {
          score.win++;
          return 'You have won';
        }
      }
      else {
        if (computerMove === 'Ball') {
          score.lose++;
          return `Computer has won`;
        }
        else if (computerMove === 'Bat') {
          score.win++;
          return 'You have won';
        }
        else {
          score.tie++;
          return `It's a tie`;
        }
      }

    }

    function showResult(userMove, computerMove, result) {
      localStorage.setItem('Score' , JSON.stringify(score));

      document.querySelector('#user-move').innerText =    userMove ? 
      `You : ${userMove}` : '';

      document.querySelector('#computer-move').innerText = computerMove ? `Computer : ${computerMove}` : '';

      document.querySelector('#result').innerText =  result ?`Result : ${result}`: '';

      document.querySelector('#score').innerText =  score.displayScore();
     
    }