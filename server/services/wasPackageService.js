var WasPackageModel = require('../models/wasPackage'),
    _logger;

function init(logger, callback){
    callback();
};

function query(queryObj, next){
    queryObj = queryObj || {};
    WasPackageModel.find(queryObj, function (err, docs) {
        next(err, docs);
    });
};

module.exports = {
    init : init,
    query : query
}