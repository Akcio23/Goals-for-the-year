import express from 'express';
import Goal from '../models/Goals';
import goalRoutes from '>./routes/goalRoute'; // Supondo que sua rota está em goalRoute.js

const app = express();
app.use(express.json());
app.use(goalRoutes);

// Mock do modelo Goal
jest.mock('../models/Goal');


describe('GET /goal', () => {
    it('deve retornar uma lista de objetivos com status 200', async () => {
        // Mockando o retorno de Goal.find
        Goal.find.mockResolvedValue([
            {  metaOne: 'Aprender Jest' },
            {  metaTwo: 'Estudar Node.js' }
        ]);

        const res = await request(app).get('/goal');

        expect(res.status).toBe(200);
        expect(res.body).toEqual([
            {  title: 'Aprender Jest' },
            {  title: 'Estudar Node.js' }
        ]);
    });

    it('deve retornar um erro com status 400 quando ocorrer uma falha', async () => {
        // Mockando uma falha no Goal.find
        Goal.find.mockRejectedValue(new Error('Falha ao buscar objetivos'));

        const res = await request(app).get('/goal');

        expect(res.status).toBe(400);
        expect(res.text).toBe('Falha ao buscar objetivos');
    });
});