// Link html "cards" to JS

const cards = document.querySelectorAll('.card');

 

//Set variables

let flippedCard = false;

let lockBoard = true;

let firstFlip, secondFlip;

var score = 0;

 

//This block of code will be for the timer

 

var timer;

function clock() {

    timer = setInterval(myClock, 1000);

    var i =45;

    lockBoard = false;

    

    function myClock() {

        document.getElementById('countdown').innerHTML = --i;

        if (i < 0) {

            clearInterval(timer);

            lockBoard = true;

            alert("Time's up! How did you do?");

        }

    }

}

 

//This block of code will refresh the page

function refresh() {

    location.reload();

}




//This function "flip" the cards into the flipped class

function flip() {

    if (lockBoard) return;

    if (this === firstFlip) return;

 

    this.classList.toggle('flip');

    if (!flippedCard){

        flippedCard = true;

        firstFlip = this; 

    } else {

        flippedCard = false;

        secondFlip = this;

        matchCheck();

 

//This console.log displays the card that was clicked on

    console.log(firstFlip.dataset.framework)

    console.log(secondFlip.dataset.framework)

    }

}

 

//This function checks to see if the data attribute from our HTML is a match.

//If a match, will run the match complete function

//Other wise will return the cards to the unflipped state

function matchCheck() { 

    if (firstFlip.dataset.framework === secondFlip.dataset.framework){

        matchComplete();

        } else {

          unflip(); 

        }

} 

 

//This function removes the event listener if there is a match

//This prevents the cards from flipping back to the starting state

//Also keep tracks of user score 

function matchComplete(){

    firstFlip.removeEventListener('click', flip);

    secondFlip.removeEventListener('click', flip);

    score = score + 1;

    console.log(score);

    document.getElementById('cardScore');

    cardScore.innerHTML=score

    }

 

//This function flips the cards back to their orginal state by removing the flip class

function unflip(){

lockBoard = true; 

    setTimeout(() => {

        firstFlip.classList.remove('flip');

        secondFlip.classList.remove('flip');

        lockBoard = false;

        }, 1000);

}

 

//This function shuffles the "cards"

//Parentheis at the start and ending make the function run on page refresh

(function cardShuffle(){

    cards.forEach(card => {

        let randomPos = Math.floor(Math.random() * 16); //Math function that allows random position

        card.style.order = randomPos;

    });

})();

 

//Event listener for when user clicks on card

cards.forEach(card => card.addEventListener('click',flip));

 