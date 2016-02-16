var _logger,
    _wasPackageService;

function init(logger, wasPackageService){
    _logger = logger;
    _wasPackageService = wasPackageService;
}

function query(req, res, next){
    _wasPackageService.query(req.query || {}, function(err, docs){
        if (err){
            return next(err);
        }
        res.status(200).json(docs);
    });
};

module.exports = {
    init : init,
    query : query
};