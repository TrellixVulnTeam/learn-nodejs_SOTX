class NewController{


    // [GET] /news
    index(req,res){
        console.log('ok')
        res.render('news')
    }

    // [GET] /news/:slug
    show(req,res){
        res.send('ok')
    }
}

module.exports = new NewController;