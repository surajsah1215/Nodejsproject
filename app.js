const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./models/user')
const User = require('./models/user')

const controler = require('./controller/savdata')
const app = express();
var cors = require('cors')
app.use(cors());


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())

app.post('/add-data/',controler.sumbitform);
app.get('/get-user',controler.getusers)
app.delete('/delete-user/:id',controler.deleteUser)
app.put('/edit-data/',controler.editData)


sequelize.sync()
.then((result)=>{
    app.listen(300);
    console.log('start-server')
})
.catch(err=>console.log(err))