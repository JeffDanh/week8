let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.send(`

        <h1>Dogs</h1>
        <img src="/images/background.jpg">
    
    
    `)
})

module.exports = router;
