const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.cont-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box')
const resultBox = document.querySelector('.result-box')
const tryAgainBtn = document.querySelector('.tryAgain-btn')
const goHomeBtn = document.querySelector('.goHome-btn')

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active')
}

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
    headerScore();
}

tryAgainBtn.onclick = () => {
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);

    headerScore();
}

goHomeBtn.onclick = () => {
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 1;
    userScore = 0;
    showQuestions(questionCount);
    questionCounter(questionNumb);
}

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const nextBtn = document.querySelector('.next-btn');

nextBtn.onclick = () => {
    if (questionCount < question.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);

        nextBtn.classList.remove('active');
    } else {
        showResultBox();
    }
}

const optionList = document.querySelector('.option-list');

// getting questions and option from array 
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${question[index].numb}. ${question[index].question}`;

    let optionTag =  `<div class="option"><span>${question[index].options[0]}</span></div>
        <div class="option"><span>${question[index].options[1]}</span></div>
        <div class="option"><span>${question[index].options[2]}</span></div>
        <div class="option"><span>${question[index].options[3]}</span></div>`;

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = question[questionCount].answer;
    let allOptions = optionList.children.length

    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore += 1;
        headerScore();
    } else {
        answer.classList.add('incorrect');

        //if answer incorrect, auto selected correct answer
        for (let i = 0; i < allOptions; i++) {
            if(optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }
    }

    //If User have selected disable all other option
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${question.length} Questions`
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / ${question.length}`
}

function showResultBox() {
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText  = document.querySelector('.score-text');
    scoreText.textContent = `Your Score ${userScore} out of ${question.length}`;

    
}



// SETTING UP THE QUESTIONS FOR THE ASSESMENT

let question = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "C. Hyper Text Markup Language",
        options: [
            "A. Hyper Type Markup Language",
            "B. Hyper Text Multiple Language",
            "C. Hyper Text Markup Language",
            "D. Hyper Type Multiple Language"
        ]
    },
    {
        numb: 2,
        question: " What is the correct HTML element for inserting a line break?",
        answer: "A. < b >",
        options: [
            "A. < b >",
            "B. < break >",
            "C. < lb >",
            "D. < hr >"
        ]
    },
    {
        numb: 3,
        question: "What is the correct syntax for adding a background color in CSS?",
        answer: "D. Both B and C are correct",
        options: [
            "A. body:background-color=yellow;",
            "B. body {background-color: yellow;}",
            "C. body {background: yellow;}",
            "D. Both B and C are correct"
        ]
    },
    {
        numb: 4,
        question: "What is the correct way to write a JavaScript array?",
        answer: "C. var colors = [\"red\", \"green\", \"blue\"];",
        options: [
            "A. var colors = \"red\", \"green\", \"blue\";",
            "B. var colors = (\"red\", \"green\", \"blue\");",
            "C. var colors = [\"red\", \"green\", \"blue\"];",
            "D. var colors = new Array(\"red\", \"green\", \"blue\");"
        ]
    },
    {
        numb: 5,
        question: "How do you create a function in JavaScript?",
        answer: "A. function myFunction()",
        options: [
            "A. function myFunction()",
            "B. function = myFunction()",
            "C. function:myFunction()",
            "D. myFunction()"
        ]
    },
    {
        numb: 6,
        question: "How do you call a function named 'myFunction' in JavaScript?",
        answer: "B. myFunction()",
        options: [
            "A. call myFunction()",
            "B. myFunction()",
            "C. run myFunction()",
            "D. execute myFunction()"
        ]
    },
    {
        numb: 7,
        question: "How do you write a conditional statement for executing some code if 'i' is equal to 5 in JavaScript?",
        answer: "D. if (i == 5)",
        options: [
            "A. if i = 5 then",
            "B. if i == 5 then",
            "C. if i = 5",
            "D. if (i == 5)"
        ]
    },
    {
        numb: 8,
        question: "How do you write a conditional statement for executing some code if 'i' is NOT equal to 5 in JavaScript?",
        answer: "C. if (i != 5)",
        options: [
            "A. if i <> 5",
            "B. if i != 5",
            "C. if (i != 5)",
            "D. if i =! 5 then"
        ]
    },
    {
        numb: 9,
        question: "How does a for loop start in JavaScript?",
        answer: "A. for (i = 0; i <= 5; i++)",
        options: [
            "A. for (i = 0; i <= 5; i++)",
            "B. for i = 1 to 5",
            "C. for (i = 0; i <= 5)",
            "D. for (i <= 5; i++)"
        ]
    },
    {
        numb: 10,
        question: "How can you add a comment in a JavaScript code?",
        answer: "D. Both B and C are correct",
        options: [
            "A. < !--This is a comment-- >",
            "B. //This is a comment",
            "C. /*This is a comment*/",
            "D. Both B and C are correct"
        ]
    },
    {
        numb: 11,
        question: "How do you select an element with id demo in CSS?",
        answer: "B. #demo",
        options: [        
            "A. demo",
            "B. #demo",
            "C. .demo",
            "D. *demo"
        ]
    },
    {
        numb: 12,
        question: "How do you select all <p> elements inside a <div> element in CSS?",
        answer: "A. div p",
        options: [
            "A. div p",
            "B. div + p",
            "C. div > p",
            "D. div ~ p"
        ]
    },
    {
        numb: 13,
        question: "How do you make the text bold in CSS?",
        answer: "A. font-weight: bold;",
        options: [
            "A. font-weight: bold;",
            "B. text-style: bold;",
            "C. font: bold;",
            "D. text-weight: bold;"
        ]
    },
    {
        numb: 14,
        question: "How do you make a list that lists its items with squares in CSS?",
        answer: "A. list-style-type: square;",
        options: [
            "A. list-style-type: square;",
            "B. list-type: square;",
            "C. list: square;",
            "D. list-style: square;"
        ]
    },
    {
        numb: 15,
        question: " How do you display hyperlinks without an underline in CSS?",
        answer: "A. a {text-decoration: none;}",
        options: [
           
            "A. a {text-decoration: none;}",
            "B. a {underline: none;}",
            "C. a {decoration: no-underline;}",
            "D. a {text-decoration: no-underline;}"
        ]
    },
];