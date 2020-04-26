const pool = require('../../config');

exports.getMain = [
    async function(req, res, next) {
        let query_basic = `SELECT * FROM basic ORDER BY id DESC`;
        let query_experiences = `SELECT * FROM experiences ORDER BY id DESC`;
        let query_projects = `SELECT * FROM projects ORDER BY id DESC`;
        Promise.all([pool.query(query_basic), pool.query(query_experiences), pool.query(query_projects)])
            .then(result => {
                let rows = result.map(r => r.rows)
                let data = {'basic': rows[0], 'experiences': rows[1], 'projects': rows[2]};
                res.type('application/json');
                res.status(200).send(data);
                return;
            })
    }
]