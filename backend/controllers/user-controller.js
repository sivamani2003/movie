import User from '../models/User.js'
import bcrypt from 'bcryptjs'
export const getAllUsers = async(req,res,next)=>{
    let users;
    try {
        users = await User.find()
    } catch (err) {
        return console.log(err);
    }
    if(!users){
        return res.status(500).json({message:"unexcepeted error was happended"})
    }
    return res.status(200).json({users})
}
export const signup = async(req,res,next)=>{
    const {name,email,password }= req.body;
    if(!name && name.trim()==="" && !email && email.trim()==="" && !password && password.trim()==="")
    return res.status(422).json({message:"Invalid inputs"})
    const hashedPassword = bcrypt.hashSync(password)
    let user;
    try {
        user = new User({name,email,password:hashedPassword})
        user =await user.save();
    } catch (err) {
        return console.log(err);
    }
    if(!user){
        return res.status(500).json({message:"Unexcepected error occured"})
    }
    return res.status(201).json({user})
}
export const updateUser = async(req,res,next)=>{
    const id = req.params.id;
    const {name,email,password }= req.body;
    if(
        !name && 
        name.trim()==="" && 
        !email && email.trim()==="" && 
        !password && 
        password.trim()===""
        ){
    return res.status(422).json({message:"Invalid inputs"})
    }
    let user;
    const hashedPassword = bcrypt.hashSync(password)
    try {
        user = await User.findByIdAndUpdate(id,{name,email,password:hashedPassword})
    } catch (err) {
        return console.log(err)
        
    }
    if(!user){
        return res.status(500).json({message:"something went wrong"})
    }
    res.status(200).json({message:"profile update sucessfully"})
}
export const deleteUser =async(req,res,next)=>{
    const id = req.params.id;
    let user;
    try {
        user = await User.findByIdAndDelete(id);

    } catch (err) {
        return console.log(err)
    }
    if(!user){
        return res.status(500).json({message:"something went wrong"})
    }
    res.status(200).json({message:"user deleted sucessfully"})
}
export const login = async(req,res,next)=>{
    const {email,password }= req.body;
    if(
        !email && email.trim()==="" && 
        !password && 
        password.trim()===""
        ){
    return res.status(422).json({message:"Invalid inputs"})
    }
    let existingUser;
    try {
        existingUser = await User.findOne({email})
    } catch (err) {
        return console.log(err)
    }
    if(!existingUser){
        return res.status(404).json({message:"No user found with given email"})
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message:"password Incoorect"})
    }
    res.status(200).json({message:"login Sucessfully"})

}