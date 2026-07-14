const mongoose=require('mongoose');
module.exports=mongoose.model('Transaction',new mongoose.Schema({
title:String,amount:Number,type:String,category:String,
date:{type:Date,default:Date.now}
}));