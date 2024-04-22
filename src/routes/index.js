const { Router } = require('express');
const router = Router();

//routes
router.get('/' , (req,res) => {
    res.json({
        "Title" : "helloWorld"
    });
});

router.get('/test' , (req,res) => {
    const data = {
        "Name": "Eduardo",
        "Web" : "nose.com",
        "url" : "/holaquehace/hola"
    }
    res.json(data);
});

module.exports = router;