const quizData = [
    {
        question: "The purpose of markup is to ?",
        a: "Add hypertext capabilities",
        b: "Enhance the Document",
        c: "Both a & b",
        d: "NONE",
        correct: "c",
    },
    {
        question: "Which language runs in a web browser ?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        correct: "d",
    },
    {
        question: "What does CSS stands for ?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "How do you add a background color for all <h1> elements ?",
        a: "h1{background-color:#FFFFFF;}",
        b: "h1.all{background-color:#FFFFFF;}",
        c: "all.h1{background-color:#FFFFFF;}",
        d: "all.h1{background-color:#FFFFF;}",
        correct: "a",
    },
    {
        question: "To get ordered list we use ?",
        a: "<h1>",
        b: "<ul>",
        c: "<ol>",
        d: "<ml>",
        correct: "c",    
    },
    {
        question: "What does HTML stands for ?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "None",
        correct: "a",    
    },
    {
        question: "What year was Javascript Launched ?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None",
        correct: "b",
    },
    {
        question: "What is the difference between XML and HTML ?",
        a: "HTML is used for exchanging data, XML is not",
        b: "XML is used for exchanging data, HTML is not",
        c: "HTML can have user defined tags, XML cannot",
        d: "XML can have user defined tags, HTML cannot",
        correct: "b",
    },
    {
        question: "What is the correct CSS syntax ?",
        a: "{body;color:black;}",
        b: "body{color:black;}",
        c: "body:color=black;",
        d: "{body:color=black;}",
        correct: "b",    
    },
    {
        question: "How do you call a function named 'myFunction' ?",
        a: "myFunction()",
        b: "call function myFunction()",
        c: "call myFunction()",
        d: "callingmyFunction()",
        correct: "a",    
    },
    {
        question: "Inside which HTML element do we put the Javascript ?",
        a: "<script>",
        b: "<js>",
        c: "<scripting>",
        d: "<javascript>",
        correct: "a",    
    }

];

const quiz= document.getElementById('quiz')
const answerE1s = document.querySelectorAll('.answer')
const questionE1= document.getElementById('question')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const d_text= document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionE1.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerE1s.forEach(answerE1 => answerE1.checked = false)
}

function getSelected() {
    let answer
    answerE1s.forEach(answerE1 => {
        if(answerE1.checked) {
            answer = answerE1.id
        }
    })
    return answer
}

submitBtn.addEventListener('click',() => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML=
            `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
        }
    }
})

