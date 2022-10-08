import config from './config';
import express from 'express';

const { port } = config;

const app = express();

app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
