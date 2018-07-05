# MORFEO
## Description

This repository is a API REST with Nodejs, Express and MySQL.

## Installation
Using Nodejs v10.3, Express, MySQL preferably.

## DataBase
Using MySQL preferably.

## Apps
Using Postman or RestEasy to feed the api.

## Usage
```html
$ git clone https://github.com/DanielArturoAlejoAlvarez/Morfeo.git [NAME APP] 

$ npm install

$ npm run dev
```
Follow the following steps and you're good to go! Important:


![alt text](https://raw.githubusercontent.com/codekirei/node-multispinner/master/extras/demo.gif)


## Coding

### Routes

```javascript
...
router.get('/api/users', UserCtrl.index)

router.get('/api/users/:id',UserCtrl.show)

router.post('/api/users', UserCtrl.create)

router.put('/api/users/:id', UserCtrl.edit)

router.delete('/api/users/:id', UserCtrl.destroy)
...
```

### Controllers

```javascript
...
function create(req,res){
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
...

```


### Model

```javascript
...
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
...
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/DanielArturoAlejoAlvarez/Morfeo. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).