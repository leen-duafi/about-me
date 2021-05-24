'use strict'


let userName=prompt('what is your name ?');
 //console.log(userName)
 

alert('welcome to my page'+ userName + 'this page was made so you can learn more about me through a gussing game i will ask you a couble of question and you can answer with yes or no. for every correct answer you will got a point. okay!!lets go ')
let book=prompt('my favorite book is harry potter?');
  //console.log(book)

let drink=prompt('my favorite drin is hot choclate?');
 // console.log(drink)
 drink=drink.toLowerCase();

let movie=prompt('my favorite movie is home alone ?');
 // console.log(movie)
 movie=movie.toLowerCase();

let food=prompt('i prefer home made food rather than restraunt food?');
  // console.log(food)
  food=food.toLowerCase();

let sport=prompt('i like to work out every day ?');  
   // console.log(sport)
   sport=sport.toLowerCase();


if(book=="yes"){alert("no harry potter is a good bock but my favorite is six of crows")}
 else{alert('one point for you :  harry potter is not my favorite book . my favorit book is six of crows')}

 if(drink=="yes"){alert(" that is right. one pont for you")}
  else{"my favorit drink IS HOT CHOCLATE "}


if (food=="yes") {alert('that is right mother food is the best. one pont for you ' )
    
}else{alert('i do love fast food but my mother food is the best ')}

if (sport=="yes") {alert('if watching tv consider working out ')
    
} else { alert('that is right and another point for you ')
    
}

alert("thank you for visting our page and playing along " + userName );

