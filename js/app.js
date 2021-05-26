'use strict'

/* let userName=prompt('what is your name ?');
//console.log(userName)

while(!userName){userName=prompt('what is your name ?')}
 

alert('welcome to my page ' +  userName   + ' this page was made so you can learn more about me through a gussing game i will ask you a couble of question and you can answer with yes or no. for every correct answer you will got a point. okay!!lets go ')

let score=0

let book=prompt('harry potter is my favorite book?');
//conole.lo(book)
book=book.toLowerCase();

while(!book){book=prompt('harry potter is my favorite book?')}

if(book=="yes" || book=="y" ){alert("no harry potter is a good book but my favorite is six of crows")
}
else if (book=="no" || book=="n"){ alert('one point for you :  harry potter is not my favorite book . my favorit book is six of crows');score++}
else (alert("please answer yes/y or no/n "))

let drink=prompt('my favorite drink is hot choclate?');
// console.log(drink)
drink=drink.toLowerCase();

while(!drink){drink=prompt('my favorite drink is hot choclate?')}

if(drink=="yes"|| drink =="y"){alert(" that is right. one pont for you");
score++}
else if (drink=="no" || drink=="n"){ alert(' my favorit drink IS HOT CHOCLATE ')}
 else(alert("please answer yes/y or no/n "))

let movie=prompt('my favorite movie is home alone ?');
// console.log(movie)
movie=movie.toLowerCase();
while(!movie){movie=prompt('my favorite movie is home alone ?')}


if (movie=="yes" || movie=="y") {alert("no that is not corect my fovirt movie is READY OR NOT ");}
else if (movie =="no" || movie =="n"){ alert('that is right you got a point my fovirt movie is READY OR NOT ');score++}
else(alert("please answer yes/y or no/n"))
 
 

let food=prompt('i prefer home made food rather than restraunt food?')
 // console.log(food)
 food=food.toLowerCase();
 while(!food){food=prompt('i prefer home made food rather than restraunt food?')}


 if (food=="yes" || food=="y") {alert('that is right mother food is the best. one pont for you ' );
 score++
   
}else if (food=="no" || food == "n" ){alert('i do love fast food but my mother food is the best ')}
else (alert("please answer yes/y or no/n "))

let sport=prompt('i like to work out every day ?');  
  // console.log(sport)
  sport=sport.toLowerCase();
  while(!sport){sport=prompt('i like to work out every day ?')}

 if (sport =="yes " || sport =="y")  {alert("if WATCHING tv consider working out ")}
else if (sport == "no" || sport == "n"){alert('that is right and another point for you ');score++}
else (alert('please answer yes/y or no/n "'))

alert("thank you for visting our page and playing along " + userName + " your score is  " + score + " out of 7" );



  let colors = ['red' , 'yellow' , 'purble' , 'orange'];
//console.log(colors); */


/* let number(guess = prompt("guess a number between 0-5"))
while (!guess) { guess = prompt("guess a number between 0-5") }
console.log(typeof (guess))

for (let i = 0; i < 4; i++) {
  console.log(i)

  if (guess > 3) {
    alert(" it is too high ");
    guess = prompt("try again")
  }
  else if (guess < 3) {
    alert("it is too low ");
    guess = prompt("try again")
  }
  else if (guess == 3) {
    alert('that is right ');
    score++; break
  }
  else if (guess !== /^[0-9.,]+$/) {
    alert('please enter only number');
    guess = prompt("try again")
  }
}
alert('the right answer is 3') */

let colors = ['red', 'yellow', 'purble', 'orange'];
let seven = ""
for (let i = 0; i < 6; i++) {
  seven = prompt('what is my favorite color')
  for (let j = 0; j < colors.length; j++) {

    if (seven == colors[j]) {
      alert('that is right ');
      (alert("the correct answers are "+ colors ));
      score++;
      i == 6;
      break;
    }
  
     if (seven !== colors[j]) { alert('try again') }
     if (i<5){break}
     if (i==5){alert("the correct answers are "+ colors );break;}


  }
  
}

