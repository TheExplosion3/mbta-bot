import postgres from 'postgres'

const sql = postgres('postgres://postgres@localhost:5432/app_db', {
    host : '',
    port: 5432,
    database: 'app_db',
    username: '',
    password: '',
})

export default sql