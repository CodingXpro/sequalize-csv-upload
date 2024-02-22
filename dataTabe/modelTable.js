import Industry from "../models/industryModel.js"
import Keyword from "../models/keywordModel.js"
import Lead from "../models/leadModel.js"

export const keywordTable=async()=>{
    try {
        await Keyword.sync({force:true})
        console.log("Table Created Successfully")
    } catch (error) {
        console.log("Error in Creating tables",error)
    }
}
export const industryTable=async()=>{
    try {
        await Industry.sync({force:true})
        console.log("Table Created Successfully")
    } catch (error) {
        console.log("Error in Creating tables",error)
    }
}
export const leadTable=async()=>{
    try {
        await Lead.sync({force:true})
        console.log("Table Created Successfully")
    } catch (error) {
        console.log("Error in Creating tables",error)
    }
}