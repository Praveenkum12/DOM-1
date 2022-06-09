'use strict';

// document.querySelector('.message').textContent = '🏆 Correct Answer!';

// document.querySelector('.number').textContent = '43';
// document.querySelector('.score').textContent = '23';
// document.querySelector('.guess').value = 45;

// const rec = {
//     name: prompt('Enter you full name'),
//     calcBirthYear: function() {
//         const currentYear = 2022;
//         const birthYear = prompt('Enter the birth year');
//         this.age = currentYear - birthYear;
//     },
// };

// const randomNumber = Math.trunc(Math.random() * 20) + 1;

// document.querySelector('.check').addEventListener('click', function() {
//     const guess = Number(document.querySelector('.guess').value);

//     if (!guess) {
//         document.querySelector('.message').textContent = '⛔ No number';
//     } else if (randomNumber > guess) {
//         document.querySelector('.message').textContent = 'Too Low';
//     } else if (randomNumber < guess) {
//         document.querySelector('.message').textContent = 'Too High';
//     } else {
//         document.querySelector('.message').textContent = '🎉 Correct Number!';
//     }
// });

'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.number').textContent = secretNumber;
let score = 20;
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number';
    } else if (guess < secretNumber) {
        score--;
        if (score > 0) {
            document.querySelector('.message').textContent = '📉 Too low';

            document.querySelector('.score').textContent = score;
        } else if (score == 0) {
            document.querySelector('.message').textContent = '💥 You lost';
            document.querySelector('.score').textContent = score;
        }
    } else if (guess > secretNumber) {
        score--;
        if (score > 0) {
            document.querySelector('.message').textContent = '📈 Too high';

            document.querySelector('.score').textContent = score;
        } else if (score == 0) {
            document.querySelector('.message').textContent = '💥 You lost';
            document.querySelector('.score').textContent = score;
        }
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Answer!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.highscore').textContent = guess;
    }
});