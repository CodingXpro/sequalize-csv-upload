import Industry from "../models/industryModel.js";
import Keyword from "../models/keywordModel.js";
import Lead from "../models/leadModel.js";


export const leadCreate=async(req,res,next)=>{
    try {
        const{firstName,lastName,email,phone,industry,keyword}=req.body;
        const existingLead=await Lead.findOne({where:{email}});
        if(existingLead){
            return res.status(400).json({message:"Lead already exists"})
        }
        const maxLeadId=await Lead.max('id');

        const count=await Lead.count();
        const id=count>0?maxLeadId+1:1;

        // const hashedPassword=await bcrypt.hash(password,10);

        const [industryInstance,keywordInstance]=await Promise.all([
            Industry.findOrCreate({where:{name:industry}}),
            Keyword.findOrCreate({where:{name:keyword}})
        ])
        // console.log(industryInstance,keywordInstance);
        const industryId=industryInstance[0].ind_id;
        const keywordId=keywordInstance[0].key_id;
      

        const newLead=await Lead.create({
            firstName,lastName,email,phone,IndustryId:industryId,KeywordId:keywordId
        })
        res.status(201).json({message:"Lead Created Successfully",lead:newLead})
    }catch(err){
        next(err);
    }
}