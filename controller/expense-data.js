const Expense = require('../models/expense');

exports.AddExpense = async(req,res,next)=>{
    try{
        const exp = req.body.exp
        const des = req.body.des
        const cat = req.body.cat
        const data = await Expense.create({experiment:exp,description:des,category:cat});
        res.status(201).json({alluser:data})
        
    }catch(err){
        res.status(500).json({
            err:err
        })
    }
   

}


exports.getExpense = async(req,res,next)=>{
    try{
        const expenseData = await Expense.findAll();
        res.json(expenseData)
    }catch(err){
        console.log(err)
        res.sendStatus(500).json({error:err});
    }
}


exports.deleteExpense = async(req,res,next)=>{
    try{
        const userid = req.params.id
        await Expense.destroy({where:{id:userid}});
        res.sendStatus(200);

    }catch(err){
        console.log(err);
        res.sendStatus(500).json({error:err});
    }
}

exports.editData = async(req,res,next)=>{
    try{
    // console.log(req.body)
    const id  = req.body.id;
    const experiment = req.body.experiment;
    const cateogory = req.body.experiment;
    const  description = req.body.description;
    const [data] = await Expense.findAll({where:{id:id}})
    data.experiment = experiment;
    data.category = cateogory;
    data.description = description
    return data.save()

    }catch(err){
        res.sendStatus(500).json({err:err});
    }


}