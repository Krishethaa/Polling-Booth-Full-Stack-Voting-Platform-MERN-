const mongoose = require('mongoose')

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Connected to MongDB');
}).catch((err)=>{
    console.error('Error connection to MongoDB:',err)
});