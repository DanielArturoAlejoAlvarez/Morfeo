'use strict'

const User = require("../models/user")

function index(req,res){
    User.getUsers((err,data)=>{
        res.json(data)
    })
}

function show(req,res){
    User.getUserById(req.params.id, (err,data)=>{
        res.json(data)
    })
}

function create(req,res){
    // console.log(req.body)
   const userData = {
        iduser: null,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        created_at: null,
        updated_at: null
    }

    User.saveUser(userData, (err,data)=>{
        if(data && data.insertId){
            res.status(200).json({
                success: true,
                msg: 'User saved!',
                data: data
            })
        }else{
            res.status(500).json({
                success: false,
                msg: 'ERROR'
            })
        }
    })
}

function edit(req,res){
    const userData = {
        iduser: req.params.id,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        created_at: null,
        updated_at: null
    }

    User.updateUser(userData, (err,data)=>{
        if(data && data.msg){
            res.status(200).json(data)
        }else{
            res.status(500).json({
                msg: false
            })
        }
    })
}

function destroy(req,res){
    User.deleteUser(req.params.id, (err,data)=>{
        if(data && data.msg==='deleted' || data.msg==='not exist'){
            res.status(200).json({
                success: true,
                data: data
            })
        }else{
            res.status(500).json({
                msg: 'ERROR!'
            })
        }
    })
}

module.exports = {
    index,
    show,
    create,
    edit,
    destroy
}

