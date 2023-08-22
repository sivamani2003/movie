import { decrypt } from 'dotenv';
import jwt from 'jsonwebtoken'
export const addMovie = async(req,res,next)=>{
    const extractedToken = req.headers.authorization.split("")[1];
    if(!extractedToken && extractedToken.trim()===""){
        return res.status(404).json({message:"Token Not Found"})
    }
   let adminId;
    jwt.verify(extractedToken,process.env.SECRECT_KEY,(err,decrypted)=>{
        if(err){
            return res.status(400).json({message:`${err.message}`})
        }
        else{
            adminId = decrypted.indexOf;
            return ;
        }
    })
   const {title,description,releaseDate,postUrl,featured} = req.body;
   if(!title&& title.trim()==="" &&!description && description.trim()===""&&!postUrl&& postUrl.trim()===""){
    return res.status(422).json({message:"Invalid Inputs"})
   }
   let movie;
   try {
     movie = new Movie({title,description})
   } catch (err) {
        return console.log(err)
   }
}