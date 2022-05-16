const randoBtn = document.querySelector('.rando-btn');

const foodOptsArr = ["Famous Dave's Quick Que", "La Puente", "Level Crossing", "Fresh Donuts & Deli"]

const randoPicker = () => {
    const randoWinner = foodOptsArr[Math.floor(Math.random() * foodOptsArr.length)];
    alert(randoWinner);
}

randoBtn.addEventListener('click', randoPicker)