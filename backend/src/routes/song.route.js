const express = require('express');
const multer = require('multer')
const router =express.Router();
const uploadFile = require("../service/storage.service")


const upload = multer({storage:multer.memoryStorage()})



router.post('/songs',upload.single("audio"),async(req,res)=>{

    console.log(req.body);
    console.log(req.file);
    const fileData = await uploadFile(req.file)
    console.log(fileData);
    
    
    res.status(201).json({
        message:'song created sucessfully',

        song:req.body
    })
    
})







module.exports= router;