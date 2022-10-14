console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submited successfully');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let pic = document.querySelector('img')

function giveCompliment (event){
	event.preventDefault()
	alert('Wow you look stunning. So smart of you to come here')
}

pic.addEventListener('mouseover', giveCompliment)
