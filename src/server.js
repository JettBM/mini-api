const { timeStamp } = require('console');
const express = require('express');
const http = require('http');
const { send } = require('process');
const logger = require('./utils/logger');
const users = require('./data/users.json');


const app = express();

app.use(express.json());

app.use(logger);

app.get('/', (req, res) => {
    res.send('welcome to my API');
});

app.get('/about', (req, res) => {
    res.send('API created by Jeudy')
})

app.get('/time', (req, res) => {
    const currentTime = new Date();

    res.json({
        time: currentTime.toISOString(),
    });
})

app.get('/users', (req, res) => {
    res.json(users);
});

app.use((req, res) => {
    res.status(404).send('ruta no encontrada');
});

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});


