const mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_nkxln7fd:63sa45442gbancho2dtkvve6q0@ds121176.mlab.com:21176/heroku_nkxln7fd', {useNewUrlParser: true}, (err) => {
    if(!err) { console.log('MongoDB Connection Success!')}
    else {console.log('MongoDB Connected Failed!')}
});

require('./employee.mdel');
require('./store.model');

