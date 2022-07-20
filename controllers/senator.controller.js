const mongoose = require('mongoose');
const utils = require('./utils.controller');
const Senator = mongoose.model('Senator');

const getAllSenators = function(req, res){
    const response = {};
    let count = parseInt(process.env.DEFAULT_COUNT);
    let offset = parseInt(process.env.DEFAULT_OFFSET);
    if(req.query.count && req.query.count <= process.env.DEFAULT_COUNT){
        count = parseInt(req.query.count);
    }
    if(req.query.offset){
        offset = parseInt(req.query.offset);
    }

    Senator.find().sort('person.lastname').skip(offset).limit(count).exec()
        .then(senators=>utils._fillResponse(response, process.env.STATUS_OK, senators))
        .catch(err=>utils._fillResponse(response, process.STATUS_INTERNAL_SERVER_ERROR, err))
        .finally(()=>utils._sendResponse(res, response));
}

const getOneSenator = function(req, res){
    const response = {};

    Senator.findById(req.params.senatorId)
        .then(senator=>{
            if(!senator){
                utils._fillResponse(response, process.env.STATUS_NOT_FOUND, {message: process.env.MSG_SENATOR_NOT_FOUND});
            }
            else {
                utils._fillResponse(response, process.env.STATUS_OK, senator);
            }
        })
        .catch(err=>utils._fillResponse(response, process.STATUS_INTERNAL_SERVER_ERROR, err))
        .finally(()=>utils._sendResponse(res, response));
}

const deleteOneSenator = function(req, res){
    const response = {};

    Senator.findByIdAndDelete(req.params.senatorId)
        .then(deletedSenator=>{
            if(!deletedSenator){
                utils._fillResponse(response, process.env.STATUS_NOT_FOUND, {message: process.env.MSG_SENATOR_NOT_FOUND});
            }
            else {
                utils._fillResponse(response, process.env.STATUS_OK, deletedSenator);
            }
        })
        .catch(err=>utils._fillResponse(response, process.STATUS_INTERNAL_SERVER_ERROR, err))
        .finally(()=>utils._sendResponse(res, response));
}

module.exports = {
    deleteOneSenator,
    getAllSenators,
    getOneSenator
}