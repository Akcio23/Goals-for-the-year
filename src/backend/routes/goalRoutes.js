import express from 'express';
import Goal from '../models/Goals.js'

const goalRoutes = express.Router()


goalRoutes.post('/goal', async (req, res) => {

    try {

        const goal = new Goal({
        metaOne: req.body.metaOne,
        metaTwo: req.body.metaTwo
        })

        await goal.save()

        return res.status(201).send("Produto Saved")

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

        return res.status(200).send("deletado com sucesso")

    } catch (err) {

        return res.status(400).send(err.message)
    }


})



export default goalRoutes