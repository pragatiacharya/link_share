const axios = require('axios');
const xpath = require('xpath')
const dom = require('xmldom').DOMParser

function parseMe(search) {
	console.log("working......")
	let url = search;
	let searchResult = '';
	let doc;
	axios.get(url).then(function(resp){
		searchResult = resp.data;
		 doc = new dom().parseFromString(searchResult)
		title(doc)
		ogurl(doc)
		ogdes(doc)
		ogimage(doc)
		})
	function title(doc){
		let title = xpath.select("//title", doc)[0].firstChild.data
		return(console.log(title))
	}
	function ogurl(doc){
		let ogurl=xpath.select("//meta[@property='og:url']/@content", doc)
		ogurl.map(function(link){
			return(link.value)				
		})
	}
	function ogdes(doc){
		let ogdes=xpath.select("//meta[@property='og:description']/@content", doc)
		ogdes.map(function(description){
			return(description.value)
		})
	}
	function ogimage(doc){
		let ogimage=xpath.select("//meta[@property='og:image']/@content", doc)
		ogimage.map(function(img){
			return(img.value)
		})
	}

}
export {parseMe};