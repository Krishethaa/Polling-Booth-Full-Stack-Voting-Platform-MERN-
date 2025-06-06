const express=require('express');
const router=express();

router.use('/poll',require('./Route/pollRoute.js'));
router.use('/user',require('./Route/userRoute.js'));

module.exports=router;
