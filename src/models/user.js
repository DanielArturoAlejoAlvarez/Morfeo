'use strict'

const DB = require("../config/db")

let userModel = {}

//All users
userModel.getUsers = (callback)=>{
    if(DB){
        DB.query("SELECT * FROM users ORDER BY iduser", (err,rows)=>{
            if(err){
                throw err
            }else{
                callback(null,rows)
            }
        })
    }
}

userModel.getUserById = (id, callback)=>{
    if(DB){
        const sqlExists = `
            SELECT * FROM users
            WHERE iduser=${DB.escape(id)}
        `
        DB.query(sqlExists, (err,row)=>{
            if(err){
                throw err
            }else{
                callback(null, row)
            }
        })
    }
}

userModel.saveUser = (userData,callback)=>{
    if(DB){
        DB.query("INSERT INTO users SET ?", userData, (err,row)=>{
            if(err){
                throw err
            }else{
                callback(null, {
                    insertId: row.insertId
                })
            }
        })
    }
}

userModel.updateUser = (userData,callback)=>{
    if(DB){
        const update = `
            UPDATE users SET
            username=${DB.escape(userData.username)},
            email=${DB.escape(userData.email)},
            password=${DB.escape(userData.password)}
            WHERE iduser=${DB.escape(userData.iduser)}
        `

        DB.query(update, (err,row)=>{
            if(err){
                throw err
            }else{
                callback(null, {
                    msg: 'Success!'
                })
            }
        })
    }
}

userModel.deleteUser = (id, callback)=>{
    if(DB){
        const sqlExists = `
            SELECT * FROM users
            WHERE iduser=${DB.escape(id)}
        `

        DB.query(sqlExists, (err,row)=>{
            if(row){
                const sql = `
                    DELETE FROM users
                    WHERE iduser=${DB.escape(id)}
                `

                DB.query(sql, (err,row)=>{
                    if(err){
                        throw err
                    }else{
                        callback(null, {
                            msg: 'deleted'
                        })
                    }
                })
            }else{
                callback(null, {
                    msg: 'not exist'
                })
            }
        })
    }
}

module.exports = userModel
    