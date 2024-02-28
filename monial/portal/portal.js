// define the questions and answers 
var questions =[
    {
        question : "What Is The Capital Of France?",
        answers: {
            
            a:"London",
            b:"Paris",
            c:"Berlin",
            d:"Madrid"
        },
        correctAnswer:"b"
    },
    {
        question: "Who Painted The Mona Lisa?",
        answers:{
            a:"Vincent van gogh",
            b:"pablo picasso",
            a:"leonardo da vinci",
            a:"rembrandt"
        },
        correctAnswer:"c"
    },
   {
        question: "What is the largest planet in our solar system?",
        answers:{
            a:"mars",
            b:"jupiter",
            a:"venus",
            a:"saturn"
        },
        correctAnswer:"b"
    }
];
//define the quiz function
function quiz() {
    //display each question and its answers
    for (var i = 0; i < questions .length; i++) {
        var question =questions[i].question;
        var answers =questions[i].answers;
        var correctAnswer =questions[i].correctAnswer;
        var userAnswer = prompt(question + "\n\na: " + "\nb: "+ answers.b + "\nc: " +answers.c +"\nd: " + answers.define);
        // check the user's answer against the answer
        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()){
            alert("correct!");
        } else {
            alert("Incorrect. The correct answer is" + correctAnswer + ".");
        }
    }
}
//Call the quiz function when the page loads
window.onload = quiz;