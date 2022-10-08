import { Pool } from 'pg';
import config from '../config';

const {
    pg: { host, user, database, password }
} = config;

export default new Pool({
    host,
    user,
    database,
    password
});
