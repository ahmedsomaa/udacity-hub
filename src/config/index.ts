import dotenv from 'dotenv';

dotenv.config();

const { PORT, PG_USER, PG_HOST, PG_DATABASE, PG_USER_PASSWORD } = process.env;

export default {
    port: parseInt(PORT as string),
    pg: {
        host: PG_HOST,
        user: PG_USER,
        database: PG_DATABASE,
        password: PG_USER_PASSWORD
    }
};
