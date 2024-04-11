const mongoose=require("mongoose");

 mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("Database connection succefully")
}).catch((err)=>{
    console.log("db connection error"+err);
})