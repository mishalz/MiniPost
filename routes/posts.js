const express = require('express')
const router = express.Router()

const Post = require('../models/post')

// Create data
router.post('/', async(req,res)=>{
    const postData = new Post({...req.body})
    try{
        const postToSave = await postData.save()
        res.send(postToSave)
    }
    catch(err){
        res.send({message: err})
    }
})

//Read data
router.get('/',async(req,res)=>{
    try{
        const allPosts = await Post.find()
        res.send(allPosts)
    }
    catch(err){
        res.send({message:err})
    }
})

//Read data by ID
router.get('/:id',async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        res.send(post)
    }
    catch(err){
        res.send({message:err})
    }
})

//Update
router.patch('/:id',async(req,res)=>{
    try{
        const updatedPost = await Post.updateOne({_id:req.params.id},{...req.body})
        res.send(updatedPost)
    }
    catch(err){
        res.send({message: err})
    }
})

//Delete
router.delete('/:id' , async(req,res)=>{
    try{
        const deletedPost = await Post.deleteOne({_id:req.params.id})
        res.send(deletedPost)
    }
    catch(err){
        res.send({message: err})
    }
})

module.exports = router