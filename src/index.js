const path= require('path')
const express= require('express')
const morgan= require('morgan')
const exphbs  = require('express-handlebars')
const route = require('./routes/index.js')
const app= express()
const port= 3000;


app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())


/* Template handlebars */
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'))

/* Logger */
//app.use(morgan('combined'))

route(app)



/* route(app) */


app.listen(port,() => console.log(`${port} thành công`))
