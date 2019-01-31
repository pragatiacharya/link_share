const axios = require('axios');
const xpath = require('xpath')
const dom = require('xmldom').DOMParser

function parseMe() {
	console.log("working......")
	let url = 'https://blog.aadeshshrestha.com.np/elixir/2018/07/29/Solving-FooBar-problem.html'
	let searchResult = '';
	axios.get(url).then(function(resp){
		searchResult = resp.data;
		// alert(searchResult);
		let doc = new dom().parseFromString(searchResult)
		let title = xpath.select("//title", doc)[0].firstChild.data
		alert(title);
		let description = xpath.select("//meta[@name='description']/@content", doc)
		let ogDescription = xpath.select("//meta[@property='og:description']/@content", doc)
		ogDescription[0].data
		alert(ogDescription);
		let ogUrl = xpath.select("//meta[@property='og:url']/@content", doc)
		ogDescription[0].value
		alert(ogUrl);


	})
}

export {parseMe};