'use strict';

var total = 0;

var name = prompt('What is your name?');
console.log('name input: ' + name);
while(name.length < 1){
  console.log('invalid name: ' + name);
  name = prompt('Please enter a valid name.');
}

var conf = confirm(name + ', would you like to play a guessing game?');

if(conf === true){
  console.log('game starting');
  total = total + guess(total);
  total = total + game(total);
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

function game(total) {
  var r = Math.round((Math.random() * 9 + 1));
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

function guess(total){
  var question = ['Does Logan have a cat?', 'Do you think Logan is over the age of 19?', 'Does Logan enjoy long walks on the beach?', 'Has Logan been outside of the USA?', 'Does Logan like the water?', 'Is Logan a psycopathic murderer?'];

  var responseOne = ['#catmasterrace', 'Yes, Logan is 20 years old.', 'No Logan hates the beach, it\'s so cold why would you ever go to the beach here!', 'Yes, Logan has visited Canada,  Mexico, Cambodia and France', 'Yes, Logan has swam for 15 years and loves the water, plus water polo.', 'Maybe...'];

  var responseTwo = ['#catsarebetter', 'Do I really look that young?', 'You were right the beach sucks', 'Wow really?', 'I\'ve been on the swim team for 15 years, and I play water polo on top of that!', 'Obviously...'];

  var yesAnswers = ['yes', 'ya', 'y', 'yeah', 'ye', 'sure', 'confirm'];

  var noAnswers = ['no', 'nope', 'n', 'noo'];

  console.log('for loop starting');
  for(var i = 0; i < question.length; i++){
    var input = prompt(question[i]).toLowerCase();
    console.log(question[i]);
    console.log(i);
    console.log(yesAnswers);
    console.log(noAnswers);
    if(input.includes(yesAnswers)){
      if(i != 3 || i != 5){
        console.log(total);
        total++;
      }
      alert(responseOne[i]);
    }
    else if(input.includes(noAnswers)){
      if(i === 3 || i === 5){
        console.log(total);
        total++;
      }
      alert(responseTwo[i]);
    }
    // else{
    //   console.log('invalid response');
    //   i--;
    // }
  }
  return total;
}
