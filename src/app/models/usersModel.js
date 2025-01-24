// models/usersModel.js
import mongoose from "mongoose";

// Definir o schema do usuário
const userSchema = new mongoose.Schema(
{
    name: { type: String, required: true },
    lastName: { type: String, required: true },
},
{
    timestamps: true, // Adiciona campos 'createdAt' e 'updatedAt' automaticamente
}
);

// Criar o modelo com base no schema
const UsersModel = mongoose.models.User || mongoose.model('User', userSchema);

export default UsersModel;
