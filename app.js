const correctAnswers = ['B', 'B', 'B', 'B'];

const submitButton = document.querySelector('.btn');
const userSelection = document.querySelectorAll('input[type="radio"]');
const score = document.querySelector('.result');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const userAnswers = [];
    let userScore = 0;

    userSelection.forEach(selection => {
        if (selection.checked) {
            userAnswers.push(selection.value);
        }
    })
    // check answers
    for (let i = 0; i < correctAnswers.length; i++) {
        if (correctAnswers[i] === userAnswers[i]) {
            userScore++;
        }
    }
    score.classList.remove('d-none');
    globalThis.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    scoreRatio = Math.ceil(userScore / 4 * 100);
    let i = 0;

    setTimeout(() => {
        const timer = setInterval(() => {
            document.querySelector('span').textContent = `${i}%`;
            i++;
            if (i === scoreRatio + 1) {
                clearInterval(timer);
            }
        }, 10);
    }, 50);
})


// setTimeout(() => {
//     alert('hi there');
// }, 3000);

// userSelection.forEach(selection => {
//     selection.addEventListener('')
// })


// userSelection.forEach(selection => {
//     console.log(selection.value);
// });