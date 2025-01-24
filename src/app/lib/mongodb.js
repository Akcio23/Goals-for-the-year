// lib/mongodb.js

import mongoose from 'mongoose';

const connectDb = async () => {
if (mongoose.connection.readyState >= 1) {
    return; // Já está conectado
}

try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado ao MongoDB');
} catch (error) {
    console.error('Erro ao conectar no MongoDB:', error);
    throw new Error('Erro ao conectar ao banco de dados');
}
};

export default connectDb;
