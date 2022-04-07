

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
    { english: 'Meal', danish : 'måltid'},
    { english: 'Bird', danish: 'fugl'},
    { english: 'Bed', danish: 'seng'},
    { english: 'Shoe', danish: 'sko'}
]

// copy the original array with JSON stringify
// filter that copied array 

let copiedWords = [...words]

// generating random pairs
let randomPair 
let randomQuestion
let rightAnswer 
let wrongAnswer = []

let score = 0;

// a random english word shown in the question section
function newQuestion(){  
    if (copiedWords.length > 0){
        randomPair = copiedWords[Math.floor(Math.random() * (copiedWords.length))]
        //console.log('this is the new pair:' , randomPair)
        randomQuestion = randomPair.english
        rightAnswer = randomPair.danish
        return document.querySelector('#question span').innerText = randomQuestion
    } else if (copiedWords.length <= 0){
        victory()
    }
}
newQuestion()
console.log(randomPair)
console.log(randomQuestion)
console.log(rightAnswer)

// danish words shown on the screen
function invasion(){
    for (let i=0; i< copiedWords.length; i++){
        let newDiv = document.createElement('div')
        //let newWords = newDiv.innerText = copiedWords[i].danish
        let newWords = newDiv.innerHTML = `
        <img src="visual/src/pixel-viking-ship.png" width="130" height="80"><p>${copiedWords[i].danish}</p>`
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
    answerTyped.value = ''
    const removedWords = copiedWords.filter(function (word){
        return word.danish !== rightAnswer;
      });
    return copiedWords = removedWords
}

function gameOver(){
    if (wrongAnswer.length >= copiedWords.length -1){
        // disable user 
        document.getElementById('answer').disabled = true

        // remove the input field
        //document.getElementById('answer').remove()

        // change the text
        let vikingLanded = document.getElementById('question')
        vikingLanded.innerHTML = `<div id="game-over">Oops! <br>The vikings have landed! <br> Run for your life!</div>`
        document.querySelector('#score span').innerText = 0
        
        // change the flag
        let danishFlag = document.createElement('div')
        danishFlag.innerHTML = `<img id="danish-flag" src="visual/src/danish-flag.png" alt="danish flag">`
        document.querySelector('#flag').appendChild(danishFlag)

    }
}

function victory(){
     let vikingLanded = document.getElementById('question')
     vikingLanded.innerHTML = `<p id="victory">Hurray! <br> You defeated the vikings! <br> God Save The Queen! </p>`
     //document.querySelector('#score span').innerText = 0   
}


document.addEventListener("keydown", function(event){
    if (event.key === 'Enter'){
        if (answerTyped.value === rightAnswer){
            score += 3;
            document.querySelector('#score span').innerText = score
            console.log('correct')
            defeat()
            newQuestion()
            invasion() 
            console.log(copiedWords)
        
        } else if (answerTyped.value !== rightAnswer){
            answerTyped.value=''
            gameOver()
            wrongAnswer.push(answerTyped.value)
            console.log('wrong')
            //newQuestion()
        } 
    }
})
