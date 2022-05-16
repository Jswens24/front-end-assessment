console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert('Form has been submitted successfully');
}

const giveCompliment = () => {
	alert('You are such a hard worker!')
}


let form = document.querySelector('form#contact');
const rubberDuck = document.querySelector('img');

form.addEventListener('submit', handleSubmit);
rubberDuck.addEventListener('mouseover', giveCompliment)
