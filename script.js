let questions = [];

let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

function init() {
    loadQuestions('quiz_1');
    showQuestion();
}

function showQuestion() {
    if (allQuestionsAnswered()) {
        calculateScore();
        showEndScreen();
        disablePreviousQuestionButton();
    } else {
        if (firstQuestion()) disablePreviousQuestionButton();
        let question = questions[currentQuestion];
        setQuestions();
        if (questionAlreadyAnswered(question)) highlightSelectedAnswer(question);
    }
}

function showEndScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none;';
}

function allQuestionsAnswered() {
    return currentQuestion >= questions.length;
}

function firstQuestion() {
    return currentQuestion == 0;
}

function setQuestions() {
    let question = questions[currentQuestion];
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function questionAlreadyAnswered(question) {
    return question["selected_answer"] != '';
}

function highlightSelectedAnswer(question) {
    answer(`answer_${question["selected_answer"]}`);
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let cardId = selection + '_card';
    question["selected_answer"] = selectedQuestionNumber;
    checkAnswer(question, selectedQuestionNumber, cardId);
    disableAnswerButtons();
    calculateProgressBar();
    enableNextQuestionButton();
}

function checkAnswer(question, selectedQuestionNumber, cardId) {
    let idOfRightAnswerCard = `answer_${question['right_answer']}_card`;
    if (answerIsRight(selectedQuestionNumber, question)) {
        addClassToAnswerButton(cardId, true); // second parameter is right (true) or wrong (false) answer 
        AUDIO_SUCCESS.play();
    } else {
        addClassToAnswerButton(cardId, false);
        addClassToAnswerButton(idOfRightAnswerCard, true);
        AUDIO_FAIL.play();
    }
}

function answerIsRight(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['right_answer'];
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-question').disabled = true;
    resetAnswerButtons();
    resetAudio();
    enablePreviousQuestionButton();
    enableAnswerButtons();
    showQuestion();
}

function resetAudio() {
    AUDIO_SUCCESS.pause();
    AUDIO_SUCCESS.currentTime = 0;
    AUDIO_FAIL.pause();
    AUDIO_FAIL.currentTime = 0;
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
    }
    resetAnswerButtons();
    showQuestion();
}

function addClassToAnswerButton(id, answer) {
    if (answer) {
        document.getElementById(id).classList.add('bg-right-answer');
        document.getElementById(id + '_choice').classList.add('right-answer-choice');
    } else {
        document.getElementById(id).classList.add('bg-wrong-answer', 'disable');
        document.getElementById(id + '_choice').classList.add('wrong-answer-choice');
    }
}

function disableAnswerButtons() {
    for (let index = 1; index <= 4; index++) {
        document.getElementById('answer_' + `${index}` + '_card').classList.add('disable');
    }
}

function enableAnswerButtons() {
    for (let index = 1; index <= 4; index++) {
        document.getElementById('answer_' + `${index}` + '_card').classList.remove('disable');
    }
}

function removeClassToAnswerButton(id) {
    document.getElementById(id).classList.remove('bg-right-answer');
    document.getElementById(id + '_choice').classList.remove('right-answer-choice');
    document.getElementById(id).classList.remove('bg-wrong-answer');
    document.getElementById(id + '_choice').classList.remove('wrong-answer-choice');
}

function resetAnswerButtons() {
    for (let i = 1; i < 5; i++) {
        removeClassToAnswerButton(`answer_${i}_card`);
    }
}

function calculateScore() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        let question = questions[i];
        if (question['right_answer'] == question['selected_answer']) score++;
    }
    document.getElementById('quizScore').innerHTML = `${score}/${questions.length}`;
}

function calculateProgressBar() {
    let percent = Math.round((currentQuestion + 1) / questions.length * 100);
    document.getElementById('progressBar').style.width = `${percent}%`;
}

function restartGame() {
    document.getElementById('questionBody').style = '';
    document.getElementById('endScreen').style = 'display: none;';
    enablePreviousQuestionButton();
    resetCurrentQuestion();
    resetSelectedAnswers();
    showQuestion();
}

function resetSelectedAnswers() {
    for (let index = 0; index < questions.length; index++) {
        let question = questions[index];
        question['selected_answer'] = '';
    }
}

function chooseQuiz(quizId) {
    setActiveQuiz(quizId);
    resetCurrentQuestion();
    showStartScreen();
    resetAnswerButtons();
    resetSelectedAnswers();
    enableAnswerButtons();
    disableNextQuestionButton();
    resetProgressBar();
    loadQuestions(quizId);
    showQuestion();
}

function setActiveQuiz(quizId) {
    for (let i = 0; i < 4; i++) {
        document.getElementById(`quiz_${i + 1}`).classList.remove('active');
    }
    document.getElementById(`${quizId}`).classList.add('active');
    document.getElementById('quizName').innerHTML = document.getElementById(quizId).innerHTML;
    document.getElementById('chooseButton').innerHTML = document.getElementById(quizId).innerHTML;
}

function showStartScreen() {
    document.getElementById('questionBody').style = 'display: none;';
    document.getElementById('startScreen').style = '';
    document.getElementById('endScreen').style = 'display: none;';
}

function loadQuestions(quizId) {
    switch (quizId.slice(-1)) {
        case '1':
            questions = questionsQuiz1;
            break;
        case '2':
            questions = questionsQuiz2;
            break;
        case '3':
            questions = questionsQuiz3;
            break;
        case '4':
            questions = questionsQuiz4;
            break;
    }
}

function startQuiz() {
    document.getElementById('questionBody').style = '';
    document.getElementById('startScreen').style = 'display: none;';
    document.getElementById('endScreen').style = 'display: none;';
    enablePreviousQuestionButton();
}

function disablePreviousQuestionButton() {
    document.getElementById('previous-question').disabled = true;
}

function enablePreviousQuestionButton() {
    document.getElementById('previous-question').disabled = false;
}

function disableNextQuestionButton() {
    document.getElementById('next-question').disabled = true;
}

function enableNextQuestionButton() {
    document.getElementById('next-question').disabled = false;
}

function resetCurrentQuestion() {
    currentQuestion = 0;
}

function resetProgressBar() {
    document.getElementById('progressBar').style.width = `0%`;
}