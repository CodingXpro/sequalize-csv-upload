import Keyword from "../models/keywordModel.js";

export const keywordCreate=async(req,res,next)=>{
    try {
        const {name}=req.body;

        const existingKeyword=await Keyword.findOne({where:{name}});
        if(existingKeyword){
            return res.status(400).json({message:'Keyword already exist'});
        }

        const newKeyword=await Keyword.create({name});

        res.status(201).json({message:"Keyword Created Successfully",keyword:newKeyword})
    } catch (error) {
        next(error)
    }
}