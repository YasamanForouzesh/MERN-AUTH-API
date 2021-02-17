const mongoose=require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.DB_CONNECTION_STRING,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify:false
})
.then(instance=>{
    console.log(`Connected to db: ${instance.connections[0].name}`)
})
.catch(err=>console.log(`👀👀Connection failed! ${err}`))

module.exports=mongoose

