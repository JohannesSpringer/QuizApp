let questions = [];

// questions HTML
let questionsQuiz1 = [
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

let questionsQuiz2 = [
    {
        "question": 'Wie hieß der Liedsänger von Queen?',
        "answer_1": 'Brian May',
        "answer_2": 'Roger Taylor',
        "answer_3": 'Freddie Mercury',
        "answer_4": 'John Deacon',
        "right_answer": '3',
        "selected_answer": '',
    },
    {
        "question": 'In welcher deutschen Band singt Campino?',
        "answer_1": 'Die Toten Hosen',
        "answer_2": 'Die Ärzte',
        "answer_3": 'Rammstein',
        "answer_4": 'Sportfreunde Stiller',
        "right_answer": '1',
        "selected_answer": '',
    },
    {
        "question": 'Aus wie vielen verschiedenen Noten besteht eine Dur-Tonleiter?',
        "answer_1": '6',
        "answer_2": '7',
        "answer_3": '8',
        "answer_4": '9',
        "right_answer": '3',
        "selected_answer": '',
    },
];

let questionsQuiz3 = [
    {
        "question": 'Wie heißt die Hauptstadt von Burkina Faso?',
        "answer_1": 'Honolulu',
        "answer_2": 'Sydney',
        "answer_3": 'Burkina',
        "answer_4": 'Ouagadougou',
        "right_answer": '4',
        "selected_answer": '',
    },
    {
        "question": 'Welches Land ist flächenmäßig das zweitgrößte der Erde?',
        "answer_1": 'Kanada',
        "answer_2": 'Australien',
        "answer_3": 'Russland',
        "answer_4": 'USA',
        "right_answer": '2',
        "selected_answer": '',
    },
    {
        "question": 'Welches ist das einzige deutsche Bundesland, in dem keine kreisfreie Stadt existiert?',
        "answer_1": 'Mecklenburg-Vorpommern',
        "answer_2": 'Berlin',
        "answer_3": 'Saarland',
        "answer_4": 'Hessen',
        "right_answer": '3',
        "selected_answer": '',
    },
    {
        "question": 'Welcher ist der längste Fluss der Welt?',
        "answer_1": 'Jangtsekiang',
        "answer_2": 'Mississippi',
        "answer_3": 'Amazonas',
        "answer_4": 'Nil',
        "right_answer": '4',
        "selected_answer": '',
    },
];

let questionsQuiz4 = [
    {
        "question": 'Welches Amt hat Olaf Scholz?',
        "answer_1": 'Bundesminister für Wirtschaft und Klimaschutz',
        "answer_2": 'Bundeskanzler',
        "answer_3": 'Bundesminister der Finanzen',
        "answer_4": 'Bundesminister der Justiz',
        "right_answer": '2',
        "selected_answer": '',
    },
    {
        "question": 'Welches Amt hat Robert Habeck?',
        "answer_1": 'Bundesminister für Wirtschaft und Klimaschutz',
        "answer_2": 'Bundeskanzler',
        "answer_3": 'Bundesminister der Finanzen',
        "answer_4": 'Bundesminister der Justiz',
        "right_answer": '1',
        "selected_answer": '',
    },
    {
        "question": 'Welches Amt hat Christian Lindner?',
        "answer_1": 'Bundesminister für Wirtschaft und Klimaschutz',
        "answer_2": 'Bundeskanzler',
        "answer_3": 'Bundesminister der Finanzen',
        "answer_4": 'Bundesminister der Justiz',
        "right_answer": '3',
        "selected_answer": '',
    },
    {
        "question": 'Welches Amt hat Nancy Faeser?',
        "answer_1": 'Bundesministerin für Wirtschaft und Klimaschutz',
        "answer_2": 'Bundesministerin des Auswärtigen Amtes',
        "answer_3": 'Bundesministerin des Inneren und der Heimat',
        "answer_4": 'Bundesminister für Familie, Senioren, Frauen und Jugend',
        "right_answer": '3',
        "selected_answer": '',
    },
    {
        "question": 'Welches Amt hat Annalena Baerbock?',
        "answer_1": 'Bundesministerin für Wirtschaft und Klimaschutz',
        "answer_2": 'Bundesministerin des Auswärtigen Amtes',
        "answer_3": 'Bundesministerin des Inneren und der Heimat',
        "answer_4": 'Bundesminister für Familie, Senioren, Frauen und Jugend',
        "right_answer": '2',
        "selected_answer": '',
    },
    {
        "question": 'Welches Amt hat Marco Buschmann?',
        "answer_1": 'Bundesminister für Wirtschaft und Klimaschutz',
        "answer_2": 'Bundesminister der Verteidigung',
        "answer_3": 'Bundesminister der Finanzen',
        "answer_4": 'Bundesminister der Justiz',
        "right_answer": '4',
        "selected_answer": '',
    },
    {
        "question": 'Welches Amt hat Hubertus Heil?',
        "answer_1": 'Bundesminister für Wirtschaft und Klimaschutz',
        "answer_2": 'Bundesminister der Verteidigung',
        "answer_3": 'Bundesminister für Arbeit und Soziales',
        "answer_4": 'Bundesminister für Gesundheit',
        "right_answer": '3',
        "selected_answer": '',
    },
    {
        "question": 'Welches Amt hat Boris Pistorius?',
        "answer_1": 'Bundesminister für Ernährung und Landwirtschaft',
        "answer_2": 'Bundesminister der Verteidigung',
        "answer_3": 'Bundesminister für Arbeit und Soziales',
        "answer_4": 'Bundesminister für Gesundheit',
        "right_answer": '2',
        "selected_answer": '',
    },
    {
        "question": 'Welches Amt hat Cem Özdemir?',
        "answer_1": 'Bundesminister für Ernährung und Landwirtschaft',
        "answer_2": 'Bundesminister der Verteidigung',
        "answer_3": 'Bundesminister für Arbeit und Soziales',
        "answer_4": 'Bundesminister für Gesundheit',
        "right_answer": '1',
        "selected_answer": '',
    },
    {
        "question": 'Welches Amt hat Lisa Paus?',
        "answer_1": 'Bundesministerin für Wirtschaft und Klimaschutz',
        "answer_2": 'Bundesministerin des Auswärtigen Amtes',
        "answer_3": 'Bundesministerin des Inneren und der Heimat',
        "answer_4": 'Bundesminister für Familie, Senioren, Frauen und Jugend',
        "right_answer": '4',
        "selected_answer": '',
    },
    {
        "question": 'Welches Amt hat Karl Lauterbach?',
        "answer_1": 'Bundeskanzler',
        "answer_2": 'Bundesminister der Verteidigung',
        "answer_3": 'Bundesminister für Arbeit und Soziales',
        "answer_4": 'Bundesminister für Gesundheit',
        "right_answer": '4',
        "selected_answer": '',
    },
    {
        "question": 'Welches Amt hat Volker Wissing?',
        "answer_1": 'Bundesminister für besondere Aufgaben / Chef des Bundeskanzleramtes',
        "answer_2": 'Bundesminister für Umwelt, Naturschutz, nukleare Sicherheit und Verbraucherschutz',
        "answer_3": 'Bundesminister für Bildung und Forschung',
        "answer_4": 'Bundesminister für Digitales und Verkehr',
        "right_answer": '4',
        "selected_answer": '',
    },
    {
        "question": 'Welches Amt hat Steffi Lemke?',
        "answer_1": 'Bundesministerin für besondere Aufgaben / Chefin des Bundeskanzleramtes',
        "answer_2": 'Bundesministerin für Umwelt, Naturschutz, nukleare Sicherheit und Verbraucherschutz',
        "answer_3": 'Bundesministerin für Bildung und Forschung',
        "answer_4": 'Bundesministerin für Digitales und Verkehr',
        "right_answer": '2',
        "selected_answer": '',
    },
    {
        "question": 'Welches Amt hat Bettina Stark-Watzinger?',
        "answer_1": 'Bundesministerin für besondere Aufgaben / Chefin des Bundeskanzleramtes',
        "answer_2": 'Bundesministerin für Umwelt, Naturschutz, nukleare Sicherheit und Verbraucherschutz',
        "answer_3": 'Bundesministerin für Bildung und Forschung',
        "answer_4": 'Bundesministerin für Digitales und Verkehr',
        "right_answer": '3',
        "selected_answer": '',
    },
    {
        "question": 'Welches Amt hat Svenja Schulze?',
        "answer_1": 'Bundesministerin für wirtschaftliche Zusammenarbeit und Entwicklung',
        "answer_2": 'Bundesministerin für Umwelt, Naturschutz, nukleare Sicherheit und Verbraucherschutz',
        "answer_3": 'Bundesministerin für Wohnen, Stadtentwicklung und Bauwesen',
        "answer_4": 'Bundesministerin für Digitales und Verkehr',
        "right_answer": '1',
        "selected_answer": '',
    },
    {
        "question": 'Welches Amt hat Klara Geywitz?',
        "answer_1": 'Bundesministerin für wirtschaftliche Zusammenarbeit und Entwicklung',
        "answer_2": 'Bundesministerin für Umwelt, Naturschutz, nukleare Sicherheit und Verbraucherschutz',
        "answer_3": 'Bundesministerin für Wohnen, Stadtentwicklung und Bauwesen',
        "answer_4": 'Bundesministerin für Digitales und Verkehr',
        "right_answer": '3',
        "selected_answer": '',
    },
    {
        "question": 'Welches Amt hat Wolfgang Schmidt?',
        "answer_1": 'Bundesminister für besondere Aufgaben / Chef des Bundeskanzleramtes',
        "answer_2": 'Bundesminister für Umwelt, Naturschutz, nukleare Sicherheit und Verbraucherschutz',
        "answer_3": 'Bundesminister für Bildung und Forschung',
        "answer_4": 'Bundesminister für Digitales und Verkehr',
        "right_answer": '1',
        "selected_answer": '',
    },
];

let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');

function init() {
    loadQuestions('quiz_1');
    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        calculateScore();
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
            answer(`answer_${question["selected_answer"]}`);
        }
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let cardId = selection + '_card';
    question["selected_answer"] = selectedQuestionNumber;

    let idOfRightAnswerCard = `answer_${question['right_answer']}_card`;

    if (selectedQuestionNumber == question['right_answer']) {
        addClassToAnswerButton(cardId, true); // second parameter is right (true) or wrong (false) answer 
        AUDIO_SUCCESS.play();
    } else {
        addClassToAnswerButton(cardId, false);
        addClassToAnswerButton(idOfRightAnswerCard, true);
        AUDIO_FAIL.play();
    }
    calculateProgressBar();
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
    currentQuestion = 0;
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
    for (let i = 0; i < 4; i++) {
        document.getElementById(`quiz_${i+1}`).classList.remove('active');    
    }
    document.getElementById(`${quizId}`).classList.add('active');
    document.getElementById('quizName').innerHTML = document.getElementById(quizId).innerHTML;
    document.getElementById('questionBody').style = 'display: none;';
    document.getElementById('startScreen').style = '';
    document.getElementById('endScreen').style = 'display: none;';
    currentQuestion = 0;
    document.getElementById('next-question').disabled = true;
    resetAnswerButtons();
    resetSelectedAnswers();
    loadQuestions(quizId);
    showQuestion();
}

function loadQuestions(quizId) {
    switch(quizId.slice(-1)) {
        case '1':
            questions = questionsQuiz1;
            break;
        case '2':
            //questions = questionsQuiz2;
            console.log('Quiz 2');
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
}