// function play() {
//     //step-1 hide the home screen. to hide the screen and the class hidden to the home section
//     const homeSection = document.getElementById('home-screen')
//     homeSection.classList.add('hidden');
//     // show the playground
//     const playgroundSection =document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden');

//     continueGame();
// }

function continueGame(){
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet', alphabet)
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
