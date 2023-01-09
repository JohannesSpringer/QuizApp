let questions = [
    {
        "question": 'Wer hat HTML erfunden?',
        "answer_1": 'Robbie Williams',
        "answer_2": 'Tim Berners - Lee',
        "answer_3": 'Lady Gaga',
        "answer_4": 'Justin Bieber',
        "right_answer": '2'
    },
    {
        "question": 'In welchem deutschen Bundesland liegt der Bodensee?',
        "answer_1": 'Hessen',
        "answer_2": 'Sachsen',
        "answer_3": 'Baden-Württemberg',
        "answer_4": 'Mecklenbug-Vorpommern',
        "right_answer": '3'
    },
    {
        "question": 'Wie viele Teile gibt es von Avatar?',
        "answer_1": '1',
        "answer_2": '2',
        "answer_3": '3',
        "answer_4": '4',
        "right_answer": '2'
    },
    {
        "question": 'Aus welchem Kontinent kommen die Big Five?',
        "answer_1": 'Afrika',
        "answer_2": 'Australien',
        "answer_3": 'Südamerika',
        "answer_4": 'Asien',
        "right_answer": '1'
    },
    {
        "question": 'Welcher Baum ist kein Laubbaum?',
        "answer_1": 'Kastanie',
        "answer_2": 'Buche',
        "answer_3": 'Linde',
        "answer_4": 'Lärche',
        "right_answer": '4'
    },
];

let currentQuestion = 0;

function init() {
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let cardId = selection + '_card';

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(cardId).classList.add('bg-right-answer');
    } else {
        document.getElementById(cardId).classList.add('bg-danger');
    }
    getChildDivFromId(cardId);
}

function getChildDivFromId(id) {
    let children = document.getElementById(id).getElementsByTagName('div');
    children.classList.add('bg-right-answer-choice');
}