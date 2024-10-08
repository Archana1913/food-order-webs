const { generateToken } = require("../config/jwtProvider");
const bcrypt = require("bcrypt");
const userService = require("../service/userService")

const register=async(req,res)=>{
    try {
        const uder=await userService.createUser(req.body);
        const jwt=generateToken(user._id);

        return res.status(201).send({jwt,message:"register success"})
    } catch (error) {
        return res.status(500).send({error:ErrorEvent.message})
    }
}
const login = async (req,res)=>{
    const {password,email}=req.body;
    try {
        const user=await userService.getUserBybEmail(email);
        const isPasswordValid=bcrypt.compare(password,user.password);

        if(!isPasswordValid) {
            return res.status(401).send({message:"invalid password"});
        }
        const jwt=generateToken(user._id);
        return res.status(200).send({jwt,message:"login success"})

    } catch (error) {
        return res.status(500).send({error:error.message})

    }
}

module.exports={
    register,
    login
}