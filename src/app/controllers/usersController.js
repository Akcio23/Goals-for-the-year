import UsersModel from '../models/usersModel'
import {createResponse} from '../utils/createResponse'
import connectDb from '../lib/mongodb'

export const createUser = async(req) =>{

    connectDb()

    const { name, lastName } = await req.json();

    if (!name || !lastName) {

        return createResponse({ message:"Name and LastName are required"},400);
    };

    try{

        const newUser = new UsersModel({name, lastName})
    
        await newUser.save()
    
        return createResponse({message: "User added successfully."},201);
    
    }catch(error){
    
        console.error("Error in POST:", error);

        return createResponse({message: "Internal Server Error"},500);
    };
}

export const getUsers = async() =>{
    
    connectDb()
    
    try{
        
        const user = await UsersModel.find()

        return createResponse(user,200)

    }catch(error){

        console.error("Error in GET:", error);

        return createResponse({message: "Internal Server Error"},500)
    };
}