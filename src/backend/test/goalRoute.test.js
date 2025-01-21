import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import goalRoutes from '../routes/goalRoutes.js'; // ajuste o caminho, se necessário
import Goal from '../models/Goals.js';

// Configurar o app com as rotas
const app = express();
app.use(express.json());
app.use(goalRoutes);

beforeAll(async () => {
    // Conectar ao banco de dados MongoDB em memória para testes
    const url = `mongodb+srv://pedroacaciioosk8:n84Tzeghmd1wGLVC@cluster0.dzi1v.mongodb.net/`;
    await mongoose.connect(url);
});

afterAll(async () => {
    // Desconectar e limpar o banco de dados após os testes
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
});

describe('Goal Routes', () => {
    it('Deve criar uma nova meta (POST /goal)', async () => {
        const res = await request(app).post('/goal').send({
            metaOne: 'Learn React',
            metaTwo: 'Build a project'
        });

        expect(res.statusCode).toBe(201);
        expect(res.text).toBe('Produto Saved');
    });

    it('Deve listar todas as metas (GET /goal)', async () => {
        const res = await request(app).get('/goal');

        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('Deve deletar uma meta existente (DELETE /goal/:id)', async () => {
        // Primeiro, criar uma meta
        const goal = await Goal.create({ metaOne: 'Test Meta', metaTwo: 'Test Meta 2' });

        const res = await request(app).delete(`/goal/${goal._id}`);

        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('deletado com sucesso');
    });

    it('Deve retornar 404 ao tentar deletar uma meta inexistente (DELETE /goal/:id)', async () => {
        const res = await request(app).delete('/goal/000000000000000000000000');

        expect(res.statusCode).toBe(404);
        expect(res.text).toBe('ID not found');
    });
});
