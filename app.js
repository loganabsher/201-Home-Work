'use strict';

var answer0 = confirm('Are you ready?');
if(answer0 === true){
  console.log('Woo! User is ready!');
}
else{
  console.log('Sorry, too bad....');
}

alert('I am going to ask you five questions about Logan.');

var question1 = prompt('Is Logan\'s favorite color blue?').toLowerCase();
if (question1 === 'yes' || question1 === 'yeah' || question1 === 'ya' || question1 === 'y' || question1 === 'sure'){
  alert('You were correct!');
  var answer1 = 'correct!';
}
else{
  alert('You were wrong.');
  var answer1 = 'incorrect!';
}

var question2 = prompt('Did Logan play water polo growing up?').toLowerCase();
if (question2 === 'yes' || question2 === 'yeah' || question2 === 'ya' || question2 === 'y' || question2 === 'sure'){
  alert('You were correct!');
  var answer2 = 'correct!';
}
else{
  alert('You were wrong.');
  var answer2 = 'incorrect!';
}

var question3 = prompt('Is Logan a psycopathic murderer?').toLowerCase();
if (question3 === 'yes' || question3 === 'yeah' || question3 === 'ya' || question3 === 'y' || question3 === 'sure'){
  alert('You were wrong.');
  var answer3 = 'incorrect!';
}
else{
  alert('You were correct!');
  var answer3 = 'correct!';
}

var question4 = prompt('Does Logan enjoy long walks on the beach?').toLowerCase();
if (question4 === 'yes' || question4 === 'yeah' || question4 === 'ya' || question4 === 'y' || question4 === 'sure'){
  alert('You were wrong.');
  var answer4 = 'incorrect!';
}
else{
  alert('You were correct!');
  var answer4 = 'correct!';
}

var question5 = prompt('Does Logan own a cat?').toLowerCase();
if (question5 === 'yes' || question5 === 'yeah' || question5 === 'ya' || question5 === 'y' || question5 === 'sure'){
  alert('You were correct!');
  var answer5 = 'correct!';
}
else{
  alert('You were wrong.');
  var answer5 = 'incorrect!';
}

document.write('Is Logan\'s favorite color blue? Your answer: ' + question1 + ' Your result: ' + answer1 + '<br>');

document.write('Did Logan play water polo growing up? Your answer: ' + question2 + ' Your result: ' + answer2 + '<br>');

document.write('Is Logan a psycopathic murderer? Your answer: ' + question3 + ' Your result: ' + answer3 + '<br>');

document.write('Does Logan enjoy long walks on the beach? Your answer: ' + question4 + ' Your result: ' + answer4 + '<br>');

document.write('Does Logan own a cat? Your answer: ' + question5 + ' Your result: ' + answer5);
