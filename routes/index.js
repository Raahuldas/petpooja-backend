var express = require('express');
const scheduleModel = require('../models/schedule.model');
var router = express.Router();


router.post("/schedule",async function(req,res){
  const {name,email,phone,city,restaurant} = req.body;

  const schedule =await scheduleModel.create(
    {
      name,
      email,
      phone,
      city,
      restaurant
    }
  )

  res.status(200).json(schedule);
  
})

router.get("/result",async function(req,res){
  const result = await scheduleModel.find({});

  res.status(200).json(result);
})

module.exports = router;
