var WasPackageModel = require('../models/wasPackage'),
    _logger;

function init(logger, callback){
    callback();
};

function query(queryObj, next){
    queryObj = queryObj || {};
    WasPackageModel.paginate(queryObj,next);
};

function update(id, model , next){
    WasPackageModel.update({_id : id}, model, {new : true}, next);
};

function create(model , next){
    WasPackageModel.create(model, next);
};

function findOne(id, next){
    WasPackageModel.findOne({_id : id}, next);
};

module.exports = {
    init : init,
    query : query,
    create : create,
    update: update,
    findOne : findOne
};