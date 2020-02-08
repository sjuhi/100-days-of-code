const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('quetion container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIdex

startButton.addEventListener('click', startGame)
function startGame(){
    console.log('strated')
    startButton.classList.add('hide')
    shuffledQuestions = question.sort(()=> Math.random() - .5)
    currentQuestionIdex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIdex])
function showQuestion(question)
questionElement.innerText = question.question
question.answers.forEach(answer => {
    const button = document.createElement('button')
    button,innerText = answer.innerText
    button.classList.add('btn')
    if(answer.coorect){
        button.dataset.correct =answerr.coorect
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
})
}
function resetState(){
    nextButton.classList.add('hide')
}

function selectAnswer(){

}
const question = {
question = 'Presdient of India?'
}