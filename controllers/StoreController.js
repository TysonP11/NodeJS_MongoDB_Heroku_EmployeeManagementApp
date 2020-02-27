const express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Store = mongoose.model('Store');

router.get('/', (req, res) => {
    res.render("store/addOrEdit", {
        viewTitle : "Insert New Store"
    });
});

router.post('/', (req, res) => {
    insertRecord(req, res);
});

function insertRecord(req, res){
    var store = new Store();
    store.location = req.body.location;
    store.employees.push(req.body.selectpicker);
    console.log(store.employees);
    store.save((err, doc) => {
        if(!err){
            res.redirect('store/list');
        }else{
            console.log('Error during insertion' + err);
        }
    });
}


router.get('/list', (req, res) => {
    Store.find((err, docs) => {
        if(!err){
            res.render("store/list", {
                list: docs
            });
        }
        else{
            console.log("error while viewing store list: " + err);
        }
    });
});

router.get('/employees', (req, res) => {
    res.render("store/employees");
});
    


module.exports = router;