//API
const API_URL = 'https://api.api-ninjas.com/v1/quotes?category=';
const API_KEY = 'PWZ84ZSWYQbBuXuRt/ROXg==72Rpxa44GbPgWIfF';

//body element
let content = document.querySelector("#content");
let quoteButton = document.querySelector("#btn-random");
let quote = document.querySelector("#quote");
let categorySelect = document.querySelector("#category-select");

//Temp category
let tempCategory = '';

//Get quotes from api
async function getQuotes() {
	tempCategory = categorySelect.value;
	const response = await fetch(`${API_URL}${tempCategory}`, {
		headers: {
			"Content-Type": "application/json",
			"X-API-KEY": API_KEY
		}
	});
	const data = await response.json();

	markUp(data)
}

//MarkUp
function markUp(info) {
	content.innerHTML = `<h1>Quote Generator</h1><br>
	<p id="quote">${info[0].quote} <b>${info[0].author} ©</b></p><br>

	<select name="category" id="category-select">
			<option value="">Category right now: ${info[0].category}</option>
			<option value="alone">alone</option>
			<option value="amazing">amazing</option>
			<option value="anger">anger</option>
			<option value="architecture">architecture</option>
			<option value="art">art</option>
			<option value="attitude">attitude</option>
			<option value="beauty">beauty</option>
			<option value="best">best</option>
			<option value="birthday">birthday</option>
			<option value="business">business</option>
			<option value="car">car</option>
			<option value="change">change</option>
			<option value="communications">communications</option>
			<option value="computers">computers</option>
			<option value="cool">cool</option>
			<option value="courage">courage</option>
			<option value="dad">dad</option>
			<option value="dating">dating</option>
			<option value="death">death</option>
			<option value="design">design</option>
			<option value="dreams">dreams</option>
			<option value="education">education</option>
			<option value="environmental">environmental</option>
			<option value="equality">equality</option>
			<option value="experience">experience</option>
			<option value="failure">failure</option>
			<option value="faith">faith</option>
			<option value="family">family</option>
			<option value="famous">famous</option>
			<option value="fear">fear</option>
			<option value="fitness">fitness</option>
			<option value="food">food</option>
			<option value="forgiveness">forgiveness</option>
			<option value="freedom">freedom</option>
			<option value="friendship">friendship</option>
			<option value="funny">funny</option>
			<option value="future">future</option>
			<option value="god">god</option>
			<option value="good">good</option>
			<option value="government">government</option>
			<option value="graduation">graduation</option>
			<option value="great">great</option>
			<option value="happiness">happiness</option>
			<option value="health">health</option>
			<option value="history">history</option>
			<option value="home">home</option>
			<option value="hope">hope</option>
			<option value="humor">humor</option>
			<option value="imagination">imagination</option>
			<option value="inspirational">inspirational</option>
			<option value="intelligence">intelligence</option>
			<option value="jealousy">jealousy</option>
			<option value="knowledge">knowledge</option>
			<option value="leadership">leadership</option>
			<option value="learning">learning</option>
			<option value="legal">legal</option>
			<option value="life">life</option>
			<option value="love">love</option>
			<option value="marriage">marriage</option>
			<option value="medical">medical</option>
			<option value="men">men</option>
			<option value="mom">mom</option>
			<option value="money">money</option>
			<option value="morning">morning</option>
			<option value="movies">movies</option>
			<option value="success">success</option>
	</select><br>`;

	//Take new element from MarkUp
	content = document.querySelector("#content");
	quoteButton = document.querySelector("#btn-random");
	quote = document.querySelector("#quote");
	categorySelect = document.querySelector("#category-select");

	//wait change and if change in select we use getQuotes
	categorySelect.addEventListener('change', getQuotes);
}

getQuotes()	
