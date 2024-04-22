const { Router } = require ('express');
const router = Router();
const _ = require('underscore');


const movies = require('../sample.json');

router.get('/' , (req ,res) => {
    res.json(movies);
});

router.post('/' , (req,res) => {
    //console.log(req.body);
    const {title , movieYear , rating , director} =  req.body;
    if(title && movieYear && rating && director){
        const id = movies.length + 1;
        const newMovie = {...req.body , id};
        movies.push(newMovie);
        res.json(movies);
    }else{
        res.status(500).send("wrong request");
    }
});

router.delete('/:id' , (req,res) =>{
    const { id } = req.params; 
    _.each (movies , (movie , i) => {
        if(movie.id == id){
            movies.splice(i,1);
        }
    });
    res.send(movies);
});

router.put('/:id' , (req , res) => {
    const { id } = req.params;
    const {title , movieYear , rating , director} =  req.body;

    if(title && movieYear && rating && director){
        _.each(movies , (movie , i) => {
            if(movie.id == id){
                movie.title = title;
                movie.movieYear = movieYear;
                movie.rating = rating;
                movie.director = director;
            }
        });
        res.json(movies);
    }else{
        res.status(500).json({
            error : "error al editar esa cosa"
        });
    }

})

module.exports = router;