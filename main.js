const words = [
    { 'Beer' : 'øl'},
    { 'Turtle' : 'skildpadde'},
    { 'Boy' : 'dreng'},
    { 'Pants' : 'bukser'},
    { 'City' : 'by'}
]

//console.log(words[0].Beer)

const randomPair = words[Math.floor(Math.random() * (words.length -1))]
// console.log(randomPair)
// console.log(Object.keys(randomPair)[0])

function newQuestion(){
    const randomQuestion = Object.keys(randomPair)
    document.querySelector('#question span').innerText = randomQuestion
}
newQuestion()


function answer(){
    const answerTyped = document.getElementById('answer')
    const rightAnswer = Object.values(randomPair)[0]
    // console.log(rightAnswer)
    answerTyped.addEventListener("keydown", function(event){
        if (event.key === 'Enter'){
           if (answerTyped.value === rightAnswer){
              console.log('correct')
            } else {
              console.log('wrong')
            }
        }
    })
}

answer()
