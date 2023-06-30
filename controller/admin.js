const admin = require('../models/admin_sellerDB')


exports.Addproduct = async(req,res,next)=>{

    try{
       
    const p_name = req.body.p_name
    const category = req.body.category
    const selling_price = req.body.s_price
   
    const data = await admin.create({Product_name:p_name,category:category,sellingPrice:selling_price});
    res.status(201).json({alluser:data})
    console.log(req.body)
    }catch(err){
        res.status(500).json({
            err:err
        })
    }

}

exports.getProducts = async(req,res,next)=>{
    try{ 
        const product = await admin.findAll();
        res.json({
            product
        })
    }catch(err){
        console.log(err)
        res.sendStatus(500).json({error:err});

    }
}

exports.deleteProduct = async(req,res,next)=>{
    try{
        const userid = req.params.id
        await admin.destroy({where:{id:userid}});
        res.sendStatus(200);

    }catch(err){
        console.log(err);
        res.sendStatus(500).json({error:err});
    }
}
