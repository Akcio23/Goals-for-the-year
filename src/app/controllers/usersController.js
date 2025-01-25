import UsersModel from '../models/usersModel'
import connectDb from '../lib/mongodb'

export const createUser = async(req, res) =>{
    const {name, lastName} = req.body
    if (!name || !lastName) {
        return res.status(400).json({ message: 'Nome e email são obrigatórios!' });
    }
    try{
        await connectDb()

        const newUser = new UsersModel({name, lastName})

        await newUser.save()

        return res.status(201).send("User Saved")
        
    }catch(error){

        res.status(500).json({ message: 'Erro ao criar usuário', error });
    }
    
}

export const getUsers = async(req, res) =>{
    try{
        const user = await UsersModel.find()

        return res.status(200).send(user)
        
    }catch(error){
        res.status(500).json({ message: 'Erro ao buscar usuários', error });
    }
    
}