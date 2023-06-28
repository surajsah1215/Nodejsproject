const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize = require('./models/expense')
const controler = require('./controller/expense-data')
var cors = require('cors')
app.use(cors());



app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())

app.post('/add-expense/',controler.AddExpense)
app.get('/get-data/',controler.getExpense)
app.delete('/delete-expense/:id',controler.deleteExpense)
app.put('/edit-data/',controler.editData)

sequelize.sync()
.then(()=>{
    app.listen(3000);
    console.log('start-server')
})
.catch(err=>console.log(err))
