require('babel-polyfill');
let Student = require("../model/Student");
let studentDB = require('./studentDB');



// studentDB.findAll().then(function(results){
//     console.log(results);
// }).catch(function(error){
// 	   console.log("error!!",error);
// });

// studentDB.findById(2).then(function(results){
//        console.log(results);
//    }).catch(function(error){
//  	   console.log("error!!",error);
//    });

// studentDB.query().then(function(results){
//        console.log(results);
//    }).catch(function(error){
//  	   console.log("error!!",error);
//    });

   // var student = new Student(null,'jacky','男','1994-09-02');


   // studentDB.save(student).then(function(results){
   //     console.log(results);
   // }).catch(function(error){
 	 //   console.log("error!!",error);
   // }); 
   // var student = new Student(null,'tom1','男','1994-09-02');
   // studentDB.save(student).then(function(results){
   //     console.log(results);
   // }).catch(function(error){
 	 //   console.log("error!!",error);
   // });      

   // var student = new Student(null,'tom2','男','1994-09-02');
   // studentDB.save(student).then(function(results){
   //     console.log(results);
   // }).catch(function(error){
 	 //   console.log("error!!",error);
   // });    

   // var student = new Student(null,'tom3','男','1994-09-02');
   // studentDB.save(student).then(function(results){
   //     console.log(results);
   // }).catch(function(error){
 	 //   console.log("error!!",error);
   // });           


   // var student = new Student(7,'duud','男','1994-09-02');
   // studentDB.update(student).then(function(results){
   //     console.log(results);
   // }).catch(function(error){
 	 //   console.log("error!!",error);
   // });   


   var ids = [8,9];
   studentDB.batchDelete(ids).then(function(results){
       console.log(results);
   }).catch(function(error){
 	   console.log("error!!",error);
   });                  
