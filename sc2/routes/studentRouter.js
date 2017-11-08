var express = require('express');
var studentDB = require('../db/studentDB');

let router = express.Router();

router.get('/findAll',(req,resp)=>{
	studentDB.findAll().then((results)=>{
        resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

module.exports = router;
