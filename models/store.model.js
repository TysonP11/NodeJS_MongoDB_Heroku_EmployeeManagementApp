const mongoose = require('mongoose');

var storeSchema = new mongoose.Schema({
    location :{
        type: String
    },
    employees: [{
        type: String
    }],
});

mongoose.model('Store', storeSchema);