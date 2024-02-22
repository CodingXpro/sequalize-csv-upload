import Industry from "../models/industryModel.js";

export const industryCreate=async(req,res,next)=>{
    try {
        const {name}=req.body;

        const existingIndustry=await Industry.findOne({where:{name}});
        if(existingIndustry){
            return res.status(400).json({message:'Industry already exist'});
        }

        const newIndustry=await Industry.create({name});

        res.status(201).json({message:"Industry Created Successfully",industry:newIndustry})
    } catch (error) {
        next(error)
    }
}