import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";    
import { errorHandler } from "../ulte/error.js";



export const updateUser = async (req, res, next) =>{

    try{
        if(req.body.password){
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            {
                $set: {
                    name: req.body.fullname,
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    collage: req.body.company,
                    profilePicture: req.body.profilePicture,
                }
            },
            { new: true }
            );
            const { password, ...rest } = updatedUser._doc;

            res.status(200).json(rest);



    }catch (error){
        next(error)
    }
}

export const deleteUser = async (req, res, next) =>{
    if(req.user.id !== req.params.id){
        return next(errorHandler(403, "You can delete only your account!"));
    }
    try{
        await User.findByIdAndDelete(req.params.id);
        
        res.status(200).json("User has been deleted");  


    }catch (error){
        next(error)
    }   


}