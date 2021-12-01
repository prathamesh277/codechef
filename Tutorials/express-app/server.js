// const express = require('express')
// const app=express()
// app.get('/ping',(req,res)=>{
//  res.send('Node Express Application new')
// });
// app.listen(3000,()=>{
//     console.log('server runing on port 3000')
// })



// const express = require("express")
// const app= express()

// const myLogger=function(req,res,next){
//     console.log('logged')
//     next();
// }
// app.use(myLogger)

// app.get('/',(req,res)=>{
//     res.send('Home Route')
// })

// app.listen(3000,()=>{console.log('app started on port new 3000')})

// const express = require('express')
// const app = express()
// const data={
//     id:1,
//     name:'prathamesh'
// }
// app.get('/data',(req,res)=>{
//     res.json(data)
// })
// app.listen(3000,()=>{console.log('server started')})

// const express=require('express')
// const app = express();
// const port=3000;
// app.set('view engine','pug')
// app.get('/',function(req,res){
//     res.render('index')
// }).listen(port,()=>{console.log('started')})

// const express=require('express')
// const app = express()
// const path=require('path')

// const PORT=process.env.PORT || 3000
// app.set('views',path.join(__dirname,'views'));
// app.set('view engine','pug')

// app.use(express.urlencoded({
//     extended:true 
// }))
// app.get('/',function(req,res){
//     res.render('index')
// })
// app.post('/form_submit',(req,res)=>{
//     const username=req.body.username
//     const email=req.body.email
//     res.end(`Your username is: ${username} and email: ${email} `)
// })
// app.listen(3000,()=>{
//     console.log('started')
// })


