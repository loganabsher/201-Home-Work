'use strict';

var name = prompt('What is your name?');
console.log('name input: ' + name);
while(name.length < 1){
  console.log('invalid name: ' + name);
  name = prompt('Please enter a valid name.');
}

var conf = confirm(name + ', would you like to play a guessing game?');

if(conf === true){
  var total = parseInt(game());
  total = total + parseInt(guess());
  if (total == 7){
    console.log('winner ' + total);
    document.write('<p class="document">GOOD JOB ' + name + '! <br><img src="giphy (4).gif"></p>');
  }
  else{
    console.log('loss ' + total);
    document.write('<p class="document">You got ' + total + ' out of 7 correct, ' + name + '! Better luck next time! <br><img src="giphy.gif"></p>');
  }
}
function game() {
  var result = 0;
  var r = Math.round((Math.random() * 9 + 1));
  console.log(r);
  for(var i = 6; i > 0; i--){
    var guess = prompt('Guess a number between 1 & 10');
    if(guess == r){
      console.log('correct: ' + guess);
      alert('You win, the answer was ' + guess);
      result++;
      return result;
      break;
    }
    else if(guess > r){
      console.log('lower: ' + guess);
      alert('It is lower: ' + guess);
    }
    else if(guess < r) {
      console.log('higher: ' + guess);
      alert('It is higher: ' + guess);
    }
    else{
      console.log('invalid character: ' + guess);
      alert('You\'re crazy, that is not a number!');
      i++;
    }
    return result;
  }
}

function guess(){
  var question = ['Does Logan have a cat?', 'Do you think Logan is over the age of 19?', 'Does Logan enjoy long walks on the beach?', 'Has Logan been outside of the USA?', 'Does Logan like the water?', 'Is Logan a psycopathic murderer?'];

  var responseOne = ['#catmasterrace', 'Yes, Logan is 20 years old.', 'No Logan hates the beach, it\'s so cold why would you ever go to the beach here!', 'Yes, Logan has visited Canada,  Mexico, Cambodia and France', 'Yes, Logan has swam for 15 years and loves the water, plus water polo.', 'Maybe...'];

  var responseTwo = ['#catsarebetter', 'Do I really look that young?', 'You were right the beach sucks', 'Wow really?', 'I\'ve been on the swim team for 15 years, and I play water polo on top of that!', 'Obviously...'];

  var yesAnswers = ['yes', 'ya', 'y', 'yeah', 'ye', 'sure', 'confirm'];

  var noAnswers = ['no', 'nope', 'n', 'noo'];

  var result = 0;

  for(var i = 0; i < question.length; i++){
    var input = prompt(question[i]).toLowerCase();
    if(yesAnswers.includes(input)){
      if(i != 2){
        alert(responseOne[i]);
        console.log(question[i] + ' ' + responseOne[i]);
        document.write('<p class="document">Correct! ' + question[i] + ' ' + responseOne[i]);
        result++;
      }
      else{
        alert(responseOne[i]);
        console.log(question[i] + ' ' + responseOne[i]);
        document.write('<p class="document">Incorrect! ' + question[i] + ' ' + responseOne[i]);
      }
    }
    else{
      if(i == 2){
        alert(responseTwo[i]);
        console.log(question[i] + ' ' + responseTwo[i]);
        document.write('<p class="document">Correct! ' + question[i] + ' ' + responseTwo[i]);
        result++;
      }
      else{
        alert(responseTwo[i]);
        console.log(question[i] + ' ' + responseTwo[i]);
        document.write('<p class="document">Incorrect! ' + question[i] + ' ' + responseTwo[i]);
      }
    }
  }
}
