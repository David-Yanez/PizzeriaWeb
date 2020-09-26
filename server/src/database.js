const mongose = require('mongoose')

mongose.connect('mongodb://localhost/pizzeria',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then((db)=> console.log('DB esta Conectada'))
.catch((err) => console.error(err));