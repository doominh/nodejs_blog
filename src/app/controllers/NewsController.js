class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news
    show(req, res) {
        res.send('news detail');
    }
}

module.exports = new NewsController();
