var WasPackageModel = require('../models/wasPackage'),
    _logger;

function init(logger, callback){
    callback();
};

function query(queryObj, next){
    queryObj = queryObj || {};
    WasPackageModel.paginate(queryObj,next);
};

module.exports = {
    init : init,
    query : query
}