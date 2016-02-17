var mongoose = require('mongoose');




function init(config, callback){
    var mConfig = config.get('mongodb');
    var uri = mConfig.connection && mConfig.connection.uri || null;
    if (!uri)
    {
        return callback('Connection uri cannot be blank');
    }
    mongoose.connect(uri, function(err){
        if (err){
            return callback(err);
        }
        callback();
    });

};

module.exports = {
    init : init
};