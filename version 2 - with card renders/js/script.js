const container = document.querySelector('.container');

function createCard(name, status, species, img, location) {
	const card = document.createElement('div');
	card.classList.add('card');

	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');

	const cardTitle = document.createElement('div');
	cardTitle.classList.add('title');
	const cardTitleH1 = document.createElement('h1');
	cardTitleH1.innerHTML = `${name}`;	//insert name
	cardTitle.append(cardTitleH1);

	const cardStatus = document.createElement('div');
	cardStatus.classList.add('status');
	const cardLiveStatus = document.createElement('div');
	cardLiveStatus.classList.add('live-status');

	const cardStatusP = document.createElement('p');
	const cardStatusPText = document.createTextNode(`${species} -- ${status}`);	// insert status
	if(status === 'Dead'){
		cardLiveStatus.classList.add('dead');
	}
	cardStatus.append(cardLiveStatus);
	cardStatusP.append(cardStatusPText);
	cardStatus.append(cardStatusP);
	cardTitle.append(cardStatus);
	cardInfo.append(cardTitle);

	const cardContent = document.createElement('div');
	cardContent.classList.add('content');
	const cardContentText = document.createTextNode(`${location}`);	// insert location
	cardContent.append(cardContentText);
	cardInfo.append(cardContent);

	card.append(cardInfo);

	const cardImage = document.createElement('div');
	cardImage.classList.add('card-image');
	const image = document.createElement('img');
	image.src = `${img}`;	//insert img
	image.alt = 'Some image';
	cardImage.append(image);
	card.append(cardImage);

	container.append(card); 	
}
function getInfo(){
	async function getResponse(){
		return fetch('https://rickandmortyapi.com/api/character');
	}
	async function start(){
		let response = await getResponse();
		let data = await response.json();
		console.log(data);
		for(let i = 0; i < 10; i++){
			createCard(data.results[i].name, data.results[i].status, data.results[i].species,  data.results[i].image, data.results[i].location.name); 
		}
	}
	start();
}
getInfo();

// фильтрация
let inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function(item){
	item.addEventListener('click', filterCards);
});
function filterCards(event){
	if(event.target.id === 'male' || event.target.id === 'female'){
		let link = `https://rickandmortyapi.com/api/character/?gender=${event.target.id}`;

	} else if (event.target.id === 'alive' || event.target.id === 'dead'){
		let link = `https://rickandmortyapi.com/api/character/?status=${event.target.id}`;

	}
}
