const mongoose = require('mongoose');

const connect = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URL,
            {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:true,
            useCreateIndex:true
        });
        console.log('mongodp connected : ${con.connection.host')
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}


module.exports=connect;