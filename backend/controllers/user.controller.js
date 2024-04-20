import User from "../models/user.model.js";
import UserInfo from "../models/userinfo.model.js"; 
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

// user information update
export const updateUserInfo = async (req, res, next) =>{
    const {userid} = req.body;
    try{
        const currentUser = await UserInfo.findOne({userid });
        
        if (!currentUser) {
            const userInfo = new UserInfo(req.body);
            await userInfo.save();
            res.status(200).json(userInfo);
        }else{
        const userInfo = await UserInfo.findByIdAndUpdate(
            currentUser._id,
            {
                $set: {
                    collage: req.body.collage,
                    bio: req.body.bio,
                    birth: req.body.birth,
                    country: req.body.country,
                    phone: req.body.phone,
                    gender: req.body.gender,
                    language: req.body.language, 
                    twiter: req.body.twiter ,
                    instagram: req.body.instagram, 
                    facebook: req.body.facebook ,
                    linkedin: req.body.linkedin , 
                    courses: req.body.course ,  
                }
            },
            { new: true }
            );
           

            res.status(200).json(userInfo);

        }

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

export const updatePassword = async (req, res, next) => {
    const { id, oldpassword, password } = req.body;

    try {
        const user = await User.findById(id);
        if (!user) {
            return next(errorHandler(404, "User not found"));
        }

        const validPassword = await bcryptjs.compare(oldpassword, user.password);
        if (!validPassword) {
            return next(errorHandler(400, "Wrong password"));
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const updatedUser = await User.findByIdAndUpdate(id, { password: hashedPassword }, { new: true });
        
        res.status(200).json({ success: true, message: "Password updated successfully"});
    } catch (error) {
        return next(errorHandler(404, "Somthig is Worng"));
    }
};