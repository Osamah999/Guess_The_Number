'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value); // Usually we get (string value) from uesr interface so check the type of value in console
        console.log(guess);

        if (!guess) {
            document.querySelector('.message').textContent =
                '⛔ No number!';
        }
        else if (guess === secretNumber) {
            document.querySelector('.message').textContent =
                '🎉 Correct Number';

            document.querySelector('.guess').disabled = true;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }
        else if (guess !== secretNumber && guess > 0 && guess <= 20) {
            if (score > 1) {
                document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high' : '📉 Too low';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = '😞 You lost the game!';
                document.querySelector('.score').textContent = 0;
                document.querySelector('.guess').disabled = true;

                document.querySelector('body').style.backgroundColor = '#c0392b';
                document.querySelector('.number').style.width = '30rem';
                document.querySelector('.number').textContent = secretNumber;
            }
        }
        /*
        else if (guess > secretNumber && guess <= 20) {
            if (score > 1) {
                document.querySelector('.message').textContent =
                    '📈 Too high';
                score--;
                document.querySelector('.score').textContent = score;
            }
            else {
                document.querySelector('.message').textContent = '😞 You lost the game!';
                document.querySelector('.score').textContent = 0;

                document.querySelector('body').style.backgroundColor = '#c0392b';
                document.querySelector('.number').style.width = '30rem';
                document.querySelector('.number').textContent = secretNumber;
            }
        }
        else if (guess < secretNumber && guess >= 1) {
            if (score > 1) {
                document.querySelector('.message').textContent =
                    '📉 Too low';

                score--;
                document.querySelector('.score').textContent = score;
            }
        else {
            document.querySelector('.message').textContent = '😞 You lost the game!';
            document.querySelector('.score').textContent = 0;

            document.querySelector('body').style.backgroundColor = '#c0392b';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;
        }
    }
            */
        else {
            document.querySelector('.message').textContent =
                'Select number between 1 and 20 ❗';
        }
    })

document.querySelector('.again').addEventListener
    ('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.guess').disabled = false;
    })