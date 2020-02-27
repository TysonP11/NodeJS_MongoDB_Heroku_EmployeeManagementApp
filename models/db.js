const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ManagementDB', {useNewUrlParser: true}, (err) => {
    if(!err) { console.log('MongoDB Connection Success!')}
    else {console.log('MongoDB Connected Failed!')}
});

require('./employee.mdel');
require('./store.model');

