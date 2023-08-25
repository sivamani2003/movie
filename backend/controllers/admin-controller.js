import Admin from "../models/Admin.js";
import bycrypt from 'bcryptjs' 
import jwt from 'jsonwebtoken'
export const addAdmin = async (req,res,next)=>{
    const {email,password} = req.body;
    let existingAdmin;
    if(
        !email && email.trim()==="" && 
        !password && 
        password.trim()===""
        ){
    return res.status(422).json({message:"Invalid inputs"})
    }
    try {
        existingAdmin = await Admin.findOne({email}) 
    } catch (err) {
        return console.log(err)
    }
    if(existingAdmin){
        return res.status(400).json({message:"Admin already exits"})
    }
    let admin;
    const hashedpassword = bycrypt.hashSync(password)
    try {
        admin = new Admin({email,password:hashedpassword})
        admin= await admin.save()
    } catch (err) {
        return console.log(err)
    }
    if(!admin){
        return res.status(500).json({message:"unable to admin"})
    }
    return res.status(201).json({admin})
}
export const adminLogin = async(req,res,next)=>{
    const {email,password }= req.body;
    if(
        !email && email.trim()==="" && 
        !password && 
        password.trim()===""
        ){
    return res.status(422).json({message:"Invalid inputs"})
    }

    let existingAdmin;
    try {
        existingAdmin = await Admin.findOne({email})
    } catch (err) {
        return console.log(err)
    }
    if(!existingAdmin){
        return res.status(400).json({message:"Admin not found on given mail"})
    }
    const isPasswordCorrect = bycrypt.compareSync(password,existingAdmin.password)
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Incorrect password"})
    }
    const token = jwt.sign({id:existingAdmin._id},process.env.SECRECT_KEY,{
        expiresIn:"7d",
    })
    return res.status(200).json({message:"login sucessfully",token,id:existingAdmin._id})

}
export const getAdmins = async (req, res, next) => {
    let admins;
    try {
        admins = await Admin.find();
    } catch (err) {
        return console.log(err);
    }
    if (!admins) {
        return res.status(500).json({ message: "Internal server Error" });
    }
    return res.status(200).json({ admins });
}
