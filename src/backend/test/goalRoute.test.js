import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import goalRoutes from '../routes/goalRoutes.js'; // ajuste o caminho, se necessário
import Goal from '../models/Goals.js'; // Modelo de banco de dados

// Configurar o app com as rotas
const app = express();
app.use(express.json());
app.use(goalRoutes);

// Configurações para testes usando o MongoDB em memória
beforeAll(async () => {
    const url = `mongodb://127.0.0.1/goalTestDB`;
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
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

jest.mock('../models/Goals');

describe('GET /goal', () => {
    it('deve retornar uma lista de objetivos com status 200', async () => {
        Goal.find.mockResolvedValue([
            { metaOne: 'Aprender Jest', metaTwo: 'Estudar Node.js' }
        ]);

        const res = await request(app).get('/goal');

        expect(res.status).toBe(200);
        expect(res.body).toEqual([
            { metaOne: 'Aprender Jest', metaTwo: 'Estudar Node.js' }
        ]);
    });

    it('deve retornar um erro com status 400 quando ocorrer uma falha', async () => {
        Goal.find.mockRejectedValue(new Error('Falha ao buscar objetivos'));

        const res = await request(app).get('/goal');

        expect(res.status).toBe(400);
        expect(res.text).toBe('Falha ao buscar objetivos');
    });
});
