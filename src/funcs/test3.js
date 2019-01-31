const axios = require('axios');
const xpath = require('xpath');
const dom = require('xmldom').DOMParser;


 function title(search) {
	
	let url = search;
	let searchResult = '';
	let doc;
	let topic;
	axios.get(url).then(function(resp){
		searchResult = resp.data;
		doc = new dom().parseFromString(searchResult)
		topic = xpath.select("//title", doc)[0].firstChild.data
		console.log(topic)
	})
	return "hello";
}

function ogurl(search) {
	let url = search;
	let searchResult = '';
	let doc;
	 let link1="";
	axios.get(url).then(function(resp){
		searchResult = resp.data;
		 doc = new dom().parseFromString(searchResult)
		let ogurl=xpath.select("//meta[@property='og:url']/@content", doc)
		ogurl.map(function(link){
		link1=link.value;
		console.log(link1)	
		 })
	})
}
function ogDes(search) {
	let url = search;
	let searchResult = '';
	let doc;
	axios.get(url).then(function(resp){
		searchResult = resp.data;
		 doc = new dom().parseFromString(searchResult)
		let ogdes=xpath.select("//meta[@property='og:description']/@content", doc)
		ogdes.map(function(description){
			return(console.log(description.value))		
		 })
	})
}

function ogimage(search) {
	let url = search;
	let searchResult = '';
	let doc;
	axios.get(url).then(function(resp){
		searchResult = resp.data;
		 doc = new dom().parseFromString(searchResult)
		let ogimage=xpath.select("//meta[@property='og:image']/@content", doc)
		ogimage.map(function(img){
			return(img.value)	
		 })
	})
}


export {ogDes,title,ogurl,ogimage};
