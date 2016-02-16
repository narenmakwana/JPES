exports.init = function(app) {
    app.use(function(err, req, res, next) {
        var statusCode = err.statusCode || 500;
        var message = err.message || 'Internal Server Error';
        res.status(statusCode).send(message);
    });
};
