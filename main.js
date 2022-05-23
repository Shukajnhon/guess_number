'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const domSelector = function (selector) {
    var selectorEle = document.querySelector(selector)
    return selectorEle;
}


const displayMessage = function (message) {
    domSelector('.message').textContent = message;
}


domSelector('.check').addEventListener('click', function () {
    const guess = Number(domSelector('.guess').value)
    // console.log(guess, typeof guess)

    // when there is no input
    if (!guess) {

        displayMessage('⛔️ No Number!')

        //when player wins
    } else if (guess === secretNumber) {

        displayMessage('🎉 Correct Number!')
        domSelector('.number').textContent = secretNumber
        domSelector('body').style.backgroundColor = '#60b347';
        domSelector('.number').style.width = '30rem'

        if (score > highScore) {
            highScore = score;
            domSelector('.highscore').textContent = highScore;
        }

        // when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 0) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!!' : '📉 Too low!!';
            displayMessage(guess > secretNumber ? '📈 Too high!!' : '📉 Too low!!')
            score--;
            domSelector('.score').textContent = score;
        } else {

            displayMessage('💥 You lost the game!!')
        }
    }

})


domSelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...')
    domSelector('.score').textContent = score;
    domSelector('.number').textContent = '?';
    domSelector('.guess').value = '';
    domSelector('body').style.backgroundColor = '#222'
    domSelector('.number').style.width = '15rem'

    console.log(secretNumber)
})
console.log(secretNumber)
