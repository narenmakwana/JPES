var mongoose = require('mongoose'),
    util = require('util'),
    _ = require('lodash'),
    async = require('async');
    extend = util._extend;
var Schema = mongoose.Schema;
var DEFAULT_LIMIT = 100;
var QUERY_RESERVED_WORDS = {
    OFFSET : 'offset',
    LIMIT : 'limit'
};

/**
 * Removes any reserved words from the query.  Leaving in words that do not match
 * field names will result in 0 matches.
 * @param queryObj
 * @returns {*}
 */
function removeReservedWords(queryObj){
    var extendQuery = extend({}, queryObj);
    _.forEach(Object.keys(QUERY_RESERVED_WORDS) , function(key){
        delete extendQuery[QUERY_RESERVED_WORDS[key]];
    });
    return extendQuery;
};

var BaseSchema = function(obj, options) {
    Schema.apply(this, arguments);

    this.statics = {
        paginate : function(queryObj,callback){
            var self = this;
            var tasks = [];
            var offset = queryObj[QUERY_RESERVED_WORDS.OFFSET] || 0;
            var limit = queryObj[QUERY_RESERVED_WORDS.LIMIT];
            if (!limit || limit < 0 || limit > DEFAULT_LIMIT)
            {
                limit = DEFAULT_LIMIT;
            }
            tasks.push(function(done){
                var cleanQuery = removeReservedWords(queryObj);
                var query = self.find(cleanQuery);
                query.skip(offset);
                query.limit(limit);
                query.exec(done);
            });
            tasks.push(function(done){
                self.count({}, function(err, count){
                    if (err){
                        return done(err);
                    }
                    done(null, count);
                });
            });

            async.parallel(tasks, function(err, results){
                if (err){
                    return callback(err);
                }
                callback(null, {
                    items : results[0],
                    total : results[1],
                    offset : offset,
                    count : results[0].length
                })
            });
        }

    }
};

util.inherits(BaseSchema, Schema);

module.exports = BaseSchema;