const path= require('path');
const publicPath = path.join(__dirname, '..', 'public');
const express = require ('express');


const app = express();
const port = process.env.PORT ||3001;


app.use(express.static('../build'));

app.get('*', (req, res)=>{
    res.sendFile(Path.resolve(__dirname,'../build', 'index.html'));
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}!`);
});