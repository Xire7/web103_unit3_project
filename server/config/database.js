import pg from 'pg'

const config = {
    user: "postgres",
    password: "KvOAKz0YTjmT7vBhprq4",
    host: "containers-us-west-52.railway.app",
    port: 7740,
    database: "railway"
}

export const pool = new pg.Pool(config)