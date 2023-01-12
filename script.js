let questions = [
    {
        "question": 'Wer hat HTML erfunden?',
        "answer_1": 'Robbie Williams',
        "answer_2": 'Tim Berners - Lee',
        "answer_3": 'Lady Gaga',
        "answer_4": 'Justin Bieber',
        "right_answer": '2',
        "selected_answer": '',
    },
    {
        "question": 'In welchem deutschen Bundesland liegt der Bodensee?',
        "answer_1": 'Hessen',
        "answer_2": 'Sachsen',
        "answer_3": 'Baden-Württemberg',
        "answer_4": 'Mecklenbug-Vorpommern',
        "right_answer": '3',
        "selected_answer": '',
    },
    {
        "question": 'Wie viele Teile gibt es von Avatar?',
        "answer_1": '1',
        "answer_2": '2',
        "answer_3": '3',
        "answer_4": '4',
        "right_answer": '2',
        "selected_answer": '',
    },
    {
        "question": 'Aus welchem Kontinent kommen die Big Five?',
        "answer_1": 'Afrika',
        "answer_2": 'Australien',
        "answer_3": 'Südamerika',
        "answer_4": 'Asien',
        "right_answer": '1',
        "selected_answer": '',
    },
    {
        "question": 'Welcher Baum ist kein Laubbaum?',
        "answer_1": 'Kastanie',
        "answer_2": 'Buche',
        "answer_3": 'Linde',
        "answer_4": 'Lärche',
        "right_answer": '4',
        "selected_answer": '',
    },
];

let currentQuestion = 0;

function init() {
    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        // TODO: Show End Screen
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none;';
    } else {
        let question = questions[currentQuestion];
        document.getElementById('question-text').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
        if (question["selected_answer"] != '') {
            answer(question["selected_answer"]);
        }
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let cardId = selection + '_card';
    question["selected_answer"] = selection;

    let idOfRightAnswerCard = `answer_${question['right_answer']}_card`;

    if (selectedQuestionNumber == question['right_answer']) {
        addClassToAnswerButton(cardId, true); // second parameter is right (true) or wrong (false) answer 
    } else {
        addClassToAnswerButton(cardId, false);
        addClassToAnswerButton(idOfRightAnswerCard, true);
    }
    document.getElementById('next-question').disabled = false;

}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-question').disabled = true;
    resetAnswerButtons();
    showQuestion();
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
        document.getElementById(id).classList.add('bg-wrong-answer');
        document.getElementById(id + '_choice').classList.add('wrong-answer-choice');
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