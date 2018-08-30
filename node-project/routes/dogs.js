let express = require('express');
let router = express.Router();

router.get('/dogs', (req, res) => {
    let dataFile = req.app.get('appData');
    let myHTML;


    dataFile.dogs.forEach(function(item){
        myHTML += `
        <li>
            <h2>${item.name}</h2>
            <img src="/images/${item.shortname}_01.jpg" alt="">
            <p>${item.summary}</p>
        </li>
        
        `;
    })

    res.send(`
    <h1>Dogs</h1>
    <ul>
        ${myHTML}
    </ul>
    `)

})

router.get('/dogs/:dogID', (req, res) => {
    let dataFile = req.app.get('appData');
    let myHTML;
    let dogs= dataFile.dogs[req.params.dogID];

    res.send(`
        <h2>${dog.name}</h2>
        <img src="/images/dogs/${dogs.shortname}_tn.jpg" alt="">
        <p>${speaker.summary}</p>
        
    `)
})

module.exports = router;