
function init(callback){
    callback();
};

function handlePing(req, res, next){
    res.status(200).send();
};

module.exports = {
    init : init,
    handlePing : handlePing
};