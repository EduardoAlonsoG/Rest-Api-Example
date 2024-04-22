const express = require('express');
const app = express();

const morgan = require('morgan');

//setings
app.set('port' , process.env.PORT || 3000);
app.set('json spaces' , 2); // mejroa el formato del json que responde 

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index.js'));
app.use('/api/movies' , require('./routes/movies.js'));
app.use('/api/users' , require('./routes/users.js'));

//starting the server 
app.listen(app.get('port') , () => {
    console.log('Server listening on port ${3000}');
}) 
