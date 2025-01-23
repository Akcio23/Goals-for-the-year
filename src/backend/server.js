import dotenv from "dotenv"
import app from "./app.js"
import mongoose from "mongoose";

dotenv.config({path:"/home/pedro_acacio/projetos/Goals-for-the-year/.env"});

const PORT = 3000
const dbUrl = process.env.DATABASE_URL

mongoose.connect(dbUrl)

  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});



