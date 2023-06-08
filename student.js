// Assignment 6
// const lineBreaksBtn = document.querySelector('.line');
// const numberCardsBtn = document.querySelector('.cards');
const lineBreakElement = document.getElementById("breaks927");
const numberCardsElement = document.getElementById("cards659");

// lineBreaksBtn.addEventListener('click', function() {
//   getBreaks927();
// })

// numberCardsBtn.addEventListener('click', function() {
//   getCards659();
// })

function getBreaks927() {
  do {
    var userNum = parseInt(prompt('Enter a number from 1 to 5'));
  } while (isNaN(userNum) || userNum < 1 || userNum > 5);
  let brTags = "";
  for(var i = 0; i < userNum; i++) {
    brTags += "<br>";
  }
  lineBreakElement.innerHTML = brTags;
}

function getCards659() {
  do {
    var userNum = parseInt(prompt('Enter a number from 2 to 7'));
  } while (isNaN(userNum) || userNum < 2 || userNum > 7);
  let cards = "";
  for(var i = 0; i < userNum; i++) {
    cards += "Card " + "#" + i + " ";
  }
  numberCardsElement.innerHTML = cards;
}


// Assignment 5
// const NameBtn = document.querySelector('.name');
// const AgeBtn = document.querySelector('.age');
const nameElement = document.getElementById("name743");
const ageElement = document.getElementById("age212");

// NameBtn.addEventListener('click', function() {
//   getName743();
// })

// AgeBtn.addEventListener('click', function() {
//   getAge212();
// })

function getName743() {
  var userName = prompt("Please enter your name: ");
  var message1 = `Your name is ${userName}. `;
  var message2 = userName.length < 5 ? "You have a short name." : 
  (userName.length < 10 ? "You have a medium name." : "You have a long name.");
  nameElement.innerHTML = message1 + message2;
}

function getAge212() {
  var userAge = prompt("Please enter your age: ");
  var message1 = `Your age is ${userAge}. `;
  var message2 = userAge < 18 ? "You are a kid." : 
  (userAge < 50 ? "You are an adult." : "You are a senior citizen.");
  ageElement.innerHTML = message1 + message2;
}



// Assignment 4
var thetype = 'direct';

function changetype351() {
  var oldtype = thetype;
  var newtype;
  if(thetype === "direct") {
    newtype = "advertising";
  } else if(thetype === "advertising") {
    newtype = "subscription";
  } else  {
    newtype = "direct";
  }
  thetype = newtype;
  alert(`The type has changed from ${oldtype} to ${thetype}`);
}

function displaytype913() {
  if(thetype === "direct") {
    alert('Buy Now! From this web page! My children need new shoes!');
  } else if(thetype === "advertising") {
    alert('Support our advertisers! Click on an ad, so I can make money!');
  } else {
    alert('Renew your subscription today! My children need medicine!');
  }
}



// Assignment 3
var special = 1;
function displayspecial485() {
  if (special === 1) {
   alert("The current special is #1");
  // Unterminated string literal
  } else if (special === 2)  {
  // ')' expected.
   alert("The current special is #2");
  }
  if (special === 3 )  {
   alert("The current special is #3");
  // ')' expected.
  }
  special = special + 1;
  if (special > 3) {
  special = 1 ;  // wrap around
  }
}



// Assignment 2
var aname = "Christian Paterson";
var a_message = "cs190 JavaScript Lab 2";
var code = 880;

function displayinfo470() {
  alert(`${aname} has completed ${a_message}, and his code is ${code}.`);
}



// Assignment 1
function confirmlink872(linkname) {
  if (confirm("Are you sure you want to jump to " + linkname + "?")) {
    window.location = linkname;
  }
}