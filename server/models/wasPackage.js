var mongoose = require('mongoose'),
    BaseSchema = require('./baseSchema');

var WasPackageSchema = new BaseSchema({
    host : String,
    install_id : String,
    location : Date,
    packages : [mongoose.Schema.Types.Mixed]
});

var WasPackage = mongoose.model('WasPackage', WasPackageSchema , 'waspackage');

module.exports = WasPackage;