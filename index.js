const express=require('express')
const  app =express()
const cors=require('cors')
// allows us to use res.json
// it is meaningfull that we are sending data
app.use(express.json())
// allows access from all origins
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.listen(process.env.PORT ||8000,()=>{
    // we use 8000 because react use 3000 so the server will be on another port
    console.log('listening on port 8000')
})