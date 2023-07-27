import jobData from '../../data';
import { NewJobApp, jobAppEntry } from '../types';

// jobData is an array of job applications
const jobApp: jobAppEntry[] = jobData;

const getEntries = () => {
    return jobApp;
};

const addJob = (newJobAppEntry: NewJobApp): jobAppEntry => {
    const newEntry = {
        id: Math.max(...jobApp.map(d => d.id)) + 1, ...newJobAppEntry
    };
    jobApp.push(newEntry);
    return newEntry;
};

const findById = (id: number): jobAppEntry | undefined=> {
    const jobEntry = jobApp.find(j => j.id === id);
    return jobEntry;
};

export default {
    getEntries,
    addJob,
    findById
};