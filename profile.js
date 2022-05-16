const colorBtn = document.querySelector('#color');
const placeBtn = document.querySelector('#place');
const ritualBtn = document.querySelector('#ritual');

const favColor = () => {
    alert("Jessica's favorite color is purple!");
}

const favPlace = () => {
    alert("Jessica's favorite place is Sizzler");
}

const favRitual = () => {
    alert("Jessica's favorite ritual is getting ready for bed");
}


colorBtn.addEventListener('click', favColor);
placeBtn.addEventListener('click', favPlace);
ritualBtn.addEventListener('click', favRitual);

