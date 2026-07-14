const router=require('express').Router();
const Transaction=require('../models/Transaction');
router.post('/',async(req,res)=>res.json(await new Transaction(req.body).save()));
router.get('/',async(req,res)=>res.json(await Transaction.find()));
router.put('/:id',async(req,res)=>res.json(await Transaction.findByIdAndUpdate(req.params.id,req.body,{new:true})));
router.delete('/:id',async(req,res)=>{await Transaction.findByIdAndDelete(req.params.id);res.json({message:'Deleted'});});
module.exports=router;