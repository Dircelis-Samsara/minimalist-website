
// Global variables
const submitScore = document.querySelector("#resultBtn");
const resetQuiz = document.querySelector("#refreshBtn")
const resultScore = document.querySelector("#resultScore");
const wrongQuestions = document.querySelector("#wrongAnswers");

// On submit, display score and count number of correct answers
submitScore.addEventListener("click", function() {
    // Count number of correct answers, add incorrectly answered questions to an array
    const incorrectAnswers = [];
    let numCorrectAnswers = 0;

    if (document.querySelector("#correctAnswer1").checked) {
        numCorrectAnswers += 1;
    } else {
        incorrectAnswers.push("1");
    };

    if (document.querySelector("#correctAnswer2").checked) {
        numCorrectAnswers += 1;
    } else {
        incorrectAnswers.push("2");
    };

    if (document.querySelector("#correctAnswer3").checked) {
        numCorrectAnswers += 1;
    } else {
        incorrectAnswers.push("3");
    };

    // Display final score and incorrect answers, if necessary
    resultScore.innerHTML = "Score: " + numCorrectAnswers + " out of 3";
    if (numCorrectAnswers != 3 && numCorrectAnswers > 0) {
        wrongAnswers.innerHTML = "You got the following question(s) wrong: " + incorrectAnswers;
    } else if (numCorrectAnswers === 3) {
        wrongAnswers.innerHTML = "Congratulations!"
    };
});

// Reset quiz
resetQuiz.addEventListener("click", function() {
    const radioInputs = document.querySelectorAll(".form-check-input");

    // Uncheck all radios
    for (let i = 0; i < radioInputs.length; i++) {
        radioInputs[i].checked = false;
    };

    // Refresh page
    location.reload();
});