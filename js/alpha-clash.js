// function play() {
//     //step-1 hide the home screen. to hide the screen and the class hidden to the home section
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden');
//     // show the playground
//     const playgroundSection =document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden');

//     continueGame();
// }

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    console.log('player pressed');

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(expectedAlphabet, playerPressed)

    // set 
    if (playerPressed === expectedAlphabet) {
        console.log('you get a point')
        // update score
        // 1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText)
        console.log(currentScore);

        // 2. increase the update score
        const newScore = currentScore + 1;

        // 3. show the update score
        currentScoreElement.innerText = newScore
        // console.log('you have pressed correctly', expectedAlphabet);
        // start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else {
        console.log('you missed. you lost a life');
        //step-1: get the current life number
        const currentLifeElement = document.getElementById('current-life')
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        // step-2: reduce the life count
        const newLife = currentLife - 1;

        // step-3: display the update life count
        currentLifeElement.innerText = newLife;

        if (newLife === 0) {
            gameOver();
        }
    }

}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame() {
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet)

    //set randomly generated alphabet to the screen show
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet)
}

function play() {
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score',0)
    continueGame()
}

function gameOver(){
   hideElementById('play-ground')
   showElementById('final-score')
}