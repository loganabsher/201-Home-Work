'use strict';

var total = 0;

var name = prompt('What is your name?');
console.log('name input: ' + name);
while(name.length < 1){
  console.log('invalid name: ' + name);
  name = prompt('Please enter a valid name.');
}

var yesAnswers = ['yes', 'ya', 'y', 'yeah', 'ye', 'sure', 'confirm'];

var noAnswers = ['no', 'nope', 'n', 'noo'];

var conf = confirm(name + ', would you like to play a guessing game?');

if(conf === true){
  console.log('game starting');
  total = total + guess();
  total = total + game();
  // var x = 0;
  // for(var index = 6; index > 0; index--){
  //   var answer = prompt(question[x]).toLowerCase();
  //   if(answer === 'yes' || answer === 'yeah' || answer === 'ya' || answer === 'y' || answer === 'sure' || answer === 'confirm'){
  //     alert(responseOne[x]);
  //     console.log('Question ' + (x + 1) + ':' + responseOne[x]);
  //     document.write('<p class="document">' + (x + 1) + ') ' + question[x] + ': ' + responseOne[x]);
  //     if(x != 3){
  //       total++;
  //       console.log(total);
  //     }
  //   }
  //   else{
  //     alert(responseTwo[x]);
  //     console.log('Question ' + (x + 1) + ':' + responseTwo[x]);
  //     document.write('<p class="document">' + (x + 1) + ') ' + question[x] + ': ' + responseTwo[x]);
  //     if (x === 3 || x === 6){
  //       total++;
  //       console.log(total);
  //     }
  //   }
  //   x++;
  // }
// function game() {
//   var r = Math.round((Math.random() * 9 + 1));
//   console.log(r);
//   for(var i = 6; i > 0; i --){
//     var guess = prompt('Guess a number between 1 & 10');
//     if(guess == r){
//       alert('YOU WIN!');
//       total++;
//       break;
//     }
//     else{
//       alert('wrong');
//     }
//   }
// }
  if (total < 7){
    console.log('loss ' + total);
    document.write('<p class="document">You got ' + total + ' out of 7 correct, ' + name + '! Better luck next time! <br><img src="giphy.gif"></p>');
  }
  else{
    console.log('winner ' + total);
    document.write('<p class="document">GOOD JOB ' + name + '! <br><img src="giphy (4).gif"></p>');
  }
}

function game() {
  var r = Math.round((Math.random() * 9 + 1));
  var total = 0;
  console.log(r);
  console.log('for loop starting');
  for(var i = 6; i > 0; i --){
    console.log('i value ' + i);
    var guess = prompt('Guess a number between 1 & 10');
    if(guess == r){
      console.log('correct');
      alert('YOU WIN!');
      total++;
      break;
    }
    else if (guess > r) {
      console.log('lower');
      alert('It is lower');
    } else if (guess < r) {
      console.log('higher');
      alert('It is higher');
    } else {
      console.log('invalid character');
      alert('You\'re crazy, that is not a number!');
      i++;
    }
  }
  console.log('returning total ' + total);
  return total;
}

function guess(){
  var question = ['Does Logan Like cats?', 'Do you think Logan is over 19 years old?', 'Does Logan enjoy long walks on the beach?', 'Is Logan a very cool person?', 'Does Logan like the water?', 'Is Logan a psycopathic murderer?'];

  var responseOne = ['#catmasterrace', 'Yes, Logan is 20 years old.', 'You were right the beach sucks', 'Yes thank you I am great', 'Yes, Logan has swam for 15 years and loves the water.', 'Maybe.'];

  var responseTwo = ['#catsarebetter', 'Do I really look that young?', 'No Logan hates the beach, it\'s so cold why would you ever go to the beach here!', 'Wow really?', 'I\'m a fish', 'Maybe.'];

  total = 0;
  console.log('for loop starting');
  for(var i = 0; i < question.length; i++){
    console.log('i value ' + i);
    var answer = prompt(question[i]).toLowerCase();
    if(answer === 'yes' || answer === 'yeah' || answer === 'ya' || answer === 'y' || answer === 'sure' || answer === 'confirm'){
      alert(responseOne[i]);
      console.log('Question ' + (i + 1) + ':' + responseOne[i]);
      document.write('<p class="document">' + (i + 1) + ') ' + question[i] + ': ' + responseOne[i] + '</p>');
      total++;
    }
    else{
      alert(responseTwo[i]);
      console.log('Question ' + (i + 1) + ':' + responseTwo[i]);
      document.write('<p class="document">' + (inedx + 1) + ') ' + question[i] + ': ' + responseTwo[i] + '</p>');
    }
  }
  console.log('returning total ' + total);
  return total;
}
