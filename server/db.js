const Pool = require("pg").Pool

const pool = new Pool ({
    user: "postgres",
    password: "Konikoni77??",
    database: "IGHub",
    port: 5432,
    host: "localhost"
})

module.exports = pool