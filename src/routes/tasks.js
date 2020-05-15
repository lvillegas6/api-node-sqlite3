module.exports = app => {

    const db = app.db.getDataBase()


    app.route('/tasks')
        .post((req, res) => {

            const stmt = db.prepare(`INSERT INTO Tasks VALUES (?, ?, ?, ?)`)
            stmt.run(Object.values(req.body))
            stmt.finalize(err => {
                if (err) {
                    res.status(412).json({ msg: error.message })
                } else {
                    res.status(200).json({ status: 'OK' })
                }
            })

        })


}