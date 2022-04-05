const words = [
    { english: 'Beer', danish : 'øl'},
    { english: 'Turtle', danish : 'skildpadde'},
    { english: 'Boy', danish : 'dreng'},
    { english: 'Pants', danish : 'bukser'},
    { english: 'City', danish : 'by'},
    { english: 'Girl', danish : 'pige'},
    { english: 'Bread', danish : 'brød'},
    { english: 'Apple', danish : 'æble'},
    { english: 'Child', danish : 'barn'},
    { english: 'Meal', danish : 'måltid'}
]

// copy the original array with JSON stringify
// filter that copied array 

let copiedWords = [...words]

// generating random pairs
let randomPair 
let randomQuestion
let rightAnswer 

let score = 0;

// a random english word shown in the question section
function newQuestion(){  
        randomPair = copiedWords[Math.floor(Math.random() * (copiedWords.length))]
        //console.log('this is the new pair:' , randomPair)
        randomQuestion = randomPair.english
        rightAnswer = randomPair.danish
        return document.querySelector('#question span').innerText = randomQuestion
}
newQuestion()
console.log(randomPair)
console.log(randomQuestion)
console.log(rightAnswer)

// danish words shown on the screen
function invasion(){
    for (let i=0; i< copiedWords.length; i++){
        let newDiv = document.createElement('div')
        let newWords = newDiv.innerText = copiedWords[i].danish
        document.querySelector('#words').appendChild(newDiv).classList.add('word')
    }
}
invasion()
// console.log(wordsDanish)

const answerTyped = document.getElementById('answer')

// user guessing right and the word gets removed from the screen

function defeat(){
    const toBeRemoved = document.getElementById('words')
    toBeRemoved.innerHTML = ''
    const removedWords = copiedWords.filter(function (word){
        return word.danish !== rightAnswer;
      });
    return copiedWords = removedWords

}

document.addEventListener("keydown", function(event){
    if (event.key === 'Enter'){
        if (answerTyped.value === rightAnswer){
            score += 3;
            document.querySelector('#score span').innerText = score
            console.log('correct')
            answerTyped.value = ''
            defeat()
            newQuestion()
            invasion()
        } else {
            console.log('wrong')
        }
    }
})
