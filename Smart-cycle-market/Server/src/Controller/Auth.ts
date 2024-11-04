import { RequestHandler } from "express"
import UserModel from "src/models/user";

export const createuser: RequestHandler  = async (req,res)=>{

    // getting all the data 
    const {name, email, password} = req.body

    // Validate if the data is ok or not.
  // Send error if not.
    // if (!name) return res.status(422).json({ message: "Name is missing!" });
    // if (!email) return res.status(422).json({ message: "Email is missing!" });
    // if (!password)return res.status(422).json({ message: "Password is missing!" });

    // checkig if the user Available
     const existingUser = await  UserModel.findOne({email})
     if (existingUser) {
        res.send("email already used")
     }

     await UserModel.create({name, email, password})

    res.send("Ok")
}