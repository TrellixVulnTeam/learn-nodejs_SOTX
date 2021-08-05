class NewController{


    // [GET] index
    index(req,res){
        console.log('ok')
        res.render('news')
    }

    // [GET] index slug
    show(req,res){
        res.send('ok')
    }
}

module.exports = new NewController;