import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const dataBase = process.env.DATABASE_URL

const connectDb = async () => {
        
    if (mongoose.connection.readyState >= 1) {
        return; // Já está conectado
    }

    try {

        await mongoose.connect(dataBase);
        
        console.log('Conectado ao MongoDB');

    } catch (error) {
        console.error('Erro ao conectar no MongoDB:', error);
        throw new Error('Erro ao conectar ao banco de dados');
    }
};

export default connectDb;
