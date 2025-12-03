import pkg from 'pg';
const { Pool } = pkg; //include pool

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'perfume',
    user: '',
    password: '',
});

export default pool;
