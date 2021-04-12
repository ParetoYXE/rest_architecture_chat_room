const fetch = require("node-fetch");


fetch('http://localhost:3000/api')
        .then(res => console.log(res))
        .catch(err => console.log(err));    