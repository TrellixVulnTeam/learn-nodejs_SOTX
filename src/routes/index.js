const newsRoute = require('./news.js')

function route(app){

    app.get('/',(req,res) => res.render('home'))

    app.get('/news',newsRoute)
    
    app.get('/search',(req,res)=> res.render('search'))}

module.exports = route;