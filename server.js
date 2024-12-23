const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample doctor data
let doctors = [
    { id: 1, name: 'Dr. John Doe', specialty: 'General Medicine' },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Psychiatry' }
];

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Doctor Consultation Platform');
});

// Route to get list of doctors
app.get('/doctors', (req, res) => {
    res.json(do
