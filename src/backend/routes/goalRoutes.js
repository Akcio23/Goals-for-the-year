import express from 'express';
import Goal from '../models/Goals.js'
import { getMetasFromRequest } from '../../utils/meta.js';

const goalRoutes = express.Router()

goalRoutes.post('/goal', async (req, res) => {
    try {   
        const metaPost = getMetasFromRequest(req) 
        const hasUndefined = Object.values(metaPost).some(element => element === undefined); //Verifica se algum valor em metaPost é undefined. O método some retorna true assim que encontra um undefined

        if(hasUndefined){
            return res.status(400).send("All necessary information was not provided")
        }
    
        const goal = new Goal({ ...metaPost})

        await goal.save()

        return res.status(201).send("product Saved")

    } catch (err) {
        res.status(400).send(err.message)
    }
})

goalRoutes.get('/goal', async (req, res) => {
    try {
        const goal = await Goal.find()

        return res.status(200).send(goal)

    } catch (err) {
        return res.status(400).send(err.message)
    }
})

goalRoutes.delete('/goal/:id', async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id)

        if (!goal) {
            return res.status(404).send("ID not found");
        }

        await Goal.findByIdAndDelete(goal)  

        return res.status(200).send("successfully deleted")

    } catch (err) {
        return res.status(400).send(err.message)
    }
})

goalRoutes.put('/goal/:id', async (req, res) => {
    try {
        const metasUptade = getMetasFromRequest(req)
        // Usando a destruição e spread para pegar todas as metas e atualizar diretamente
        const updatedGoal = await Goal.findByIdAndUpdate(
            req.params.id, 
            { ...metasUptade },
            { new: true } 
        );

        if (!updatedGoal) {
            return res.status(404).send("Goal not found");
        }

        return res.status(200).send("Goal updated successfully");

    } catch (err) {
        return res.status(400).send(err.message);
    }
});

export default goalRoutes