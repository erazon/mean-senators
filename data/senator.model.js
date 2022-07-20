const mongoose = require('mongoose');

const senatorSchema = mongoose.Schema({
    description: String,
    enddate: String,
    leadership_title: String,
    role_type: String,
    party: String,
    person:{
        firstname: String,
        lastname: String
    },
    phone: String,
    startdate: String,
    state: String,
    title: String,
    title_long: String
});

mongoose.model('Senator', senatorSchema, process.env.COLLECTION_SENATORS);