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

function create(req, res, next){
    _wasPackageService.create(req.body, function(err, result){
        if (err){
            return next(err);
        }
        res.location(req.getUrl() + '/' + result._id);
        res.status(201).json(result);
    });
};

function get(req, res, next){
    var id = req.params.id;
    _wasPackageService.findOne(id, function(err, result){
        if (err){
            return next(err);
        }
        if (result === null)
        {
            return next({
               statusCode : 404,
               message : 'Not found'
            });
        }
        res.status(200).json(result);
    });
}

function update(req, res, next){
    var id = req.params.id;
    _wasPackageService.update(id, req.body, function(err, result){
        if (err){
            return next(err);
        }
        res.status(200).json(result);
    });
}


module.exports = {
    init : init,
    query : query,
    create : create,
    get : get,
    update : update
};