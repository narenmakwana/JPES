
function init(app){
    app.use(function(req, res, next) {
        req.getUrl = function() {
            return req.protocol + "://" + req.get('host') + req.originalUrl;
        }
        return next();
    });
}

module.exports = {
    init : init
}