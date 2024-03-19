const mongoose=require('mongoose');
const DB = process.env.DATABASE;




mongoose.connect(DB).then(()=>{
    console.log( `Connected to DB`);
}).catch((err)=>{
    console.error(`Error Connecting to the Database`, err);
});

