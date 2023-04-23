// Core Variables
    var startQuizButton = document.getElementById('startButton');
    var highScoreButton = document.querySelector('.highScoresButton');
    var remainingTime = document.getElementById('remainingTime');
    var nextQuestionButton = document.getElementById('nextQuestion');

// Screen wrappers
    var screenOneWrapper = document.querySelector('.screen-1');
    var screenTwoWrapper = document.querySelector('.screen-2');
    var screenThreeWrapper = document.querySelector('.screen-3');
    var screenFourWrapper = document.querySelector('.screen-4');

// Created variables

    var quizData = [
        {
            id: 0,
            question: "How do you add a class to an element in javascript?",
            answer: [
                    { text: "element.class()", isCorrect: false },
                    { text: "element.classes.addClass()", isCorrect: false },
                    { text: "element.classAdd()", isCorrect: false },
                    { text: "element.classList.add()", isCorrect: true }
                ]
        },

        {
            id: 1,
            question: "How do you select the first item in an array?",
            answer: [
                    { text: "array.first", isCorrect: false },
                    { text: "array[0]", isCorrect: true },
                    { text: "element[first]", isCorrect: false },
                    { text: "array(0)", isCorrect: false }
                ]
        },

        {
            id: 2,
            question: "How do you select content in an object?",
            answer: [
                    { text: "object(content)", isCorrect: false },
                    { text: "object[0]", isCorrect: false },
                    { text: "object.property", isCorrect:  true},
                    { text: "content = object", isCorrect: false }
                ]
        },

        {
            id: 3,
            question: "Which is a datatype in javascript?",
            answer: [
                { text: "boolean", isCorrect: false },
                { text: "quote", isCorrect: false },
                { text: "string", isCorrect: false },
                { text: "a and c", isCorrect: true }
            ]
        }
    ]

    // Screen 1 functions
    function startQuiz() {
        var timeLeft = 90;

        setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval();
            }
            remainingTime.value = timeLeft;
            remainingTime.textContent = timeLeft;
            timeLeft -= 1;
        },
        1000);
        
        // hide the screen 1 and show screen 2
        screenOneWrapper.classList.add('hidden');
        screenTwoWrapper.classList.remove('hidden'); 
        putOptionsIntoHTML();
    }

    // Getting options from text
    function putOptionsIntoHTML() {
    // Getting questions from text
        var question1 = document.getElementById('q1');
        var question2 = document.getElementById('q2');
        var question3 = document.getElementById('q3');
        var question4 = document.getElementById('q4');
    
    // I will set up the questions here
        
        // adding in questions
        if(question1) {
            question1.textContent = quizData[0].question;
        }
        
        if(question2) {
            question2.textContent = quizData[1].question;
        }
        
        if(question3) {
            question3.textContent = quizData[2].question;
        }

        if(question4) {
            question4.textContent = quizData[3].question;
        }

        var questionOneOptionOne = document.getElementById('q1o1');
        var questionOneOptionTwo = document.getElementById('q1o2');
        var questionOneOptionThree = document.getElementById('q1o3');
        var questionOneOptionFour = document.getElementById('q1o4');
    
        var questionTwoOptionOne = document.getElementById('q2o1');
        var questionTwoOptionTwo = document.getElementById('q2o2');
        var questionTwoOptionThree = document.getElementById('q2o3');
        var questionTwoOptionFour = document.getElementById('q2o4');
    
        var questionThreeOptionOne = document.getElementById('q3o1');
        var questionThreeOptionTwo = document.getElementById('q3o2');
        var questionThreeOptionThree = document.getElementById('q3o3');
        var questionThreeOptionFour = document.getElementById('q3o4');
    
        var questionFourOptionOne = document.getElementById('q4o1');
        var questionFourOptionTwo = document.getElementById('q4o2');
        var questionFourOptionThree = document.getElementById('q4o3');
        var questionFourOptionFour = document.getElementById('q4o4');
    
        //  adding in options                   
        if(questionOneOptionOne) {
            questionOneOptionOne.textContent = quizData[0].answer[0].text;
            questionOneOptionTwo.textContent = quizData[0].answer[1].text;
            questionOneOptionThree.textContent = quizData[0].answer[2].text;
            questionOneOptionFour.textContent = quizData[0].answer[3].text;
        }
        
        if(questionOneOptionOne) {
            questionTwoOptionOne.textContent = quizData[1].answer[0].text;
            questionTwoOptionTwo.textContent = quizData[1].answer[1].text;
            questionTwoOptionThree.textContent = quizData[1].answer[2].text;
            questionTwoOptionFour.textContent = quizData[1].answer[3].text;
        }
        
        if(questionOneOptionOne) {
            questionThreeOptionOne.textContent = quizData[2].answer[0].text;
            questionThreeOptionTwo.textContent = quizData[2].answer[1].text;
            questionThreeOptionThree.textContent = quizData[2].answer[2].text;
            questionThreeOptionFour.textContent = quizData[2].answer[3].text;
        }
    
        if(questionOneOptionOne) {
            questionFourOptionOne.textContent = quizData[3].answer[0].text;
            questionFourOptionTwo.textContent = quizData[3].answer[1].text;
            questionFourOptionThree.textContent = quizData[3].answer[2].text;
            questionFourOptionFour.textContent = quizData[3].answer[3].text;
        }
    }

    function optionSelected(event) {
        // console.log(event.target);
        // How do I click the buttons and get a right or wrong answer?
        // when user clicks each option a boolean test confirms
        var selectedItem = event.target;
        var isCorrect = selectedItem.getAttribute("isCorrect");
        var isNotCorrect = selectedItem.getAttribute("isNotCorrect");

        // verify div show if correct or not
        var verifyElement = document.getElementById('verify');

        // Remove class after another button has been clicked
        if(isCorrect) {
            // add style to change it green
            selectedItem.classList.add("green");
            // change the text of the verify element
            verifyElement.textContent = isCorrect;
        } else {
            // add styles to turn button red
            selectedItem.classList.add("red");
            // change the text of the verify element
            verifyElement.textContent = isNotCorrect;
        }
    }

    
// Need function to get questions to progress to next after answered

    // nextQuestion.onclick = function() {
    //     if (nextQuestion > question1) {
    //         question1.style.display = 'none'
    //         question2.style.display = 'block' //how does this work with 5 questions?
    //     }
    // }

// Screen Three work

// Screen four final step
