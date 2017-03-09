const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

app.get('/',function(res,resp){
    resp.sendFile(path.join(__dirname,'views/index.html'));
});

app.use('/js', express.static(path.join(__dirname, './js')));
app.use('/css', express.static(path.join(__dirname, './css')));
app.use('/images',express.static(path.join(__dirname,'./images')));
app.listen(port,function() {
    console.log('Server stared at port: '+port)
});
