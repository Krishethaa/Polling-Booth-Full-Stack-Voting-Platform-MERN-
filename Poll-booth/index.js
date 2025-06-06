const path=require('path');
const express=require('express');
const http_server=express();
const cors=require('cors');

const PORT=process.env.PORT || 3000;
require('./dbConfig');

http_server.use(cors());
http_server.use(express.json());
http_server.use(express.urlencoded({extended:true}));

const imagePath = path.join(process.cwd(), 'Controller', 'Image');
http_server.use('/api/Image',express.static(imagePath));


http_server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

// Default route
http_server.get('/', (req,res) => {
    res.send('Server is running');
})

http_server.use('/',require('./app'));