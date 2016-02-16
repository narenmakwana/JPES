var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var WasPackageSchema = new Schema({
    host : String,
    install_id : String,
    location : Date,
    packages : [Schema.Types.Mixed]
} , {
    collection : 'waspackage'
});

var WasPackage = mongoose.model('waspackage', WasPackageSchema);

module.exports = WasPackage;