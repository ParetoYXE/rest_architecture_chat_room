const fetch = require("node-fetch");


fetch('http://localhost:3000/',{method: 'POST', body:"{}",headers: {'Content-type':'application/json'}})
		.then(response => response.json())
		.then(data =>{
			console.log(data)
		})  