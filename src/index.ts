import config from './config';
import express from 'express';
import routes from './routes';

const { port } = config;

const app = express();

app.use(express.json());

app.use(routes);

app.listen(port, () => console.log(`Server started at http://localhost:${port}`));
