import { model, Schema } from "mongoose";

const userScema = new Schema({
    email:{
        type: String,
        // unique: true,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    name:{
        type: String,
        require: true
    }
},{timestamps: true})

const UserModel = model("user", userScema)

export default UserModel
