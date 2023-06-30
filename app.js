const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models/admin_sellerDB')

const controler = require('./controller/admin')
const app = express();
var cors = require('cors')
app.use(cors());




app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())

app.post('/add-data/',controler.Addproduct);
app.get('/get-user',controler.getProducts)
app.delete('/delete-product/:id',controler.deleteProduct)


sequelize.sync()
.then((result)=>{
    app.listen(3000);
    console.log('start-server')
})
.catch(err=>console.log(err))