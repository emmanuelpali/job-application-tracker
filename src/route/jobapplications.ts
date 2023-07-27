import express from 'express';
import jobServices from '../services/jobServices';

const router = express.Router();

router.get('/', (_req, res) => {
    console.log('hitting');
    
    res.send('Fetching all  job applications')
});

router.get('/:id', (req, res) => {
    const jobApp = jobServices.findById(Number(req.params.id));

    if(jobApp) {
        res.send(jobApp);
    }else {
        res.sendStatus(404);
    }
});

router.post('/', (req, res) => {
    const { date, position, company, response, } = req.body;
    const addedJob = jobServices.addJob({
        date, position, company, response,
    });
    res.json(addedJob);
});

export default router;