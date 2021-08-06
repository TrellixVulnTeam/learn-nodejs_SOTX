class SiteController{


    // [GET] /
    index(req,res){
        console.log('ok')
        res.render('home')
    }

    // [GET] /search
    search(req,res){
        res.render('search')
    }
}

module.exports = new SiteController;