const trackArray = document.querySelector('.carousel__track');
const horses = Array.from(trackArray.children);
const nextButton = document.querySelector('.carousel__button--next');
const previousButton = document.querySelector('.carousel__button--previous');
const dotsArray = document.querySelector('.carousel__dots');
const dots = Array.from(dotsArray.children);

// 0a. Position horses - Each horse should be next to another horse
const horseWidth = horses[0].getBoundingClientRect().width;

const positionHorses = (horse, index) => {
    horse.style.left = horseWidth * index + 'px';
}
horses.forEach(positionHorses);

// 0b. Function to move horses in either direction
const moveHorses= (trackArray, currentHorse, targetHorse) =>{
    const amountToMove = targetHorse.style.left;
    trackArray.style.transform = 'translateX(-'+amountToMove+')';
    currentHorse.classList.remove('current-horse');
    targetHorse.classList.add('current-horse');
}

// 0c. Function to move dots in the nagivation bar
const moveDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-horse');
    targetDot.classList.add('current-horse');
}
// 1. Click Next for image on the right
nextButton.addEventListener('click', event=>{
    const currentHorse = trackArray.querySelector('.current-horse');
    const nextHorse = currentHorse.nextElementSibling;
    const currentDot = dotsArray.querySelector('.current-horse');
    const nextDot = currentDot.nextElementSibling;
    // 1a. Next to the right most horse
    // if (nextHorse == null){
    // moveHorses(trackArray, currentHorse, horses[0]);
    //     // moveDots(currentDot, dotsArray[0]);
    // }
    // else{
    moveHorses(trackArray, currentHorse, nextHorse);
    moveDots(currentDot, nextDot);
    //}
})
// 2. Click Previous for image on the left
previousButton.addEventListener('click', event => {
    const currentHorse = trackArray.querySelector('.current-horse');
    const previousHorse = currentHorse.previousElementSibling;
    const currentDot = dotsArray.querySelector('.current-horse');
    const previousDot = currentDot.previousElementSibling;

    // 2a. Previous to the left most horse
    // if (previousHorse == null){
    //     moveHorses(trackArray, currentHorse, horses[]);
    // }

    moveHorses(trackArray, currentHorse, previousHorse);
    moveDots(currentDot, previousDot);
    
})

// Setting interval for automatic rotation
// setInterval(nextButton.click(), 5000);

// 3. Go to the respective image when clicked on any dot
dotsArray.addEventListener('click', event=>{

    targetDot = event.target.closest('button');
    // We are not entering the function, if the click is not registered on the button    
    if (!targetDot) return;

    const targetIndex = dots.findIndex(sampleDot => sampleDot === targetDot);
    targetHorse = horses[targetIndex];

    currentHorse = trackArray.querySelector('.current-horse');
    currentDot = dotsArray.querySelector('.current-horse');

    moveHorses(trackArray, currentHorse, targetHorse);
    moveDots(currentDot, targetDot);
})