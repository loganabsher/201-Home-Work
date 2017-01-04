'use strict';
var conf = confirm('Would you like to play a guessing game?');
var question = ['Is Logan\'s favorite color blue?', 'Is Logan 20 years old?', 'Does Logan enjoy long walks on the beach?', 'Is Logan a very cool person?', 'Is Logan a psycopathic murderer?'];
var responseOne = ['You were right Logan\'s favortie color is blue.', 'Yes, Logan is 20 years old.', 'No Logan hates the beach, it\'s so cold why would you ever go to the beach here!', 'Yes thankyou I am great', 'Maybe.'];
var responseTwo = ['You were wrong Logan likes the color blue the most', 'Do I really look that old?', 'You were right the beach sucks', 'Wow really?', 'Maybe.'];
if(conf === true){
  var x = 0;
  for(var index = 5; index > 0; index--){
    var answer = prompt(question[x]).toLowerCase();
    if(answer === 'yes' || answer === 'yeah' || answer === 'ya' || answer === 'y' || answer === 'sure' || answer === 'confirm'){
      alert(responseOne[x]);
      console.log('Questing ' + (x + 1) + ':' + responseOne[x]);
    }
    else{
      alert(responseTwo[x]);
      console.log('Questing ' + (x + 1) + ':' + responseTwo[x]);
    }
    x++;
  }
}
