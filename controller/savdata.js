const { error } = require('console')
const User = require('../models/user')


exports.sumbitform = async(req,res,next)=>{

    try{
        if(!req.body.phone){
            throw new Error('phone number is madatory')
        }
    const name = req.body.namee
    const email = req.body.email
    const phone = req.body.phone
   
    const data = await User.create({name:name,email:email,phone:phone});
    res.status(201).json({alluser:data})
    }catch(err){
        res.status(500).json({
            err:err
        })
    }

}

exports.getusers = async(req,res,next)=>{
    try{ const users = await User.findAll();
        // console.log(users)
        res.json({
            users
        })
    }catch(err){
        console.log(err)
        res.sendStatus(500).json({error:err});

    }
 
   
}

exports.deleteUser = async(req,res,next)=>{
    try{
        const userid = req.params.id
        await User.destroy({where:{id:userid}});
        res.sendStatus(200);

    }catch(err){
        console.log(err);
        res.sendStatus(500).json({error:err});
    }
}

exports.editData = async(req,res,next)=>{
    try{
        const userid = req.body.id
        const name = req.body.name
        const phone = req.body.phonenumber
        const email = req.body.email
        const [data] = await User.findAll({where:{id:userid}})
        data.name = name;
        data.phonenumber = phone;
        data.email = email;
        return data.save()

    }catch(err){
        res.sendStatus(500).json({err:err});
    }
}