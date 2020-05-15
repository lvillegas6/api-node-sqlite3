module.exports = app => {

   const db = app.db.getDataBase()


   app.route('/users')
      .post((req, res) => {

         const stmt = db.prepare(`INSERT INTO Users VALUES (?, ?, ?, ?)`)
         stmt.run(Object.values(req.body))
         stmt.finalize(err => {
            if (err) {
               res.status(412).json({ msg: error.message })
            } else {
               res.status(200).json({ status: 'OK' })
            }
         })

      })
      .get((req, res) => {

         const users = []
         db.each('SELECT name, email FROM Users', (err, row) => {
            users.push(row)
         }, (err, count) => {
            if (err) {
               res.status(412).json({ msg: error.message })
            } else {
               res.status(200).json({ users })
            }
         })
      })

   app.route('/users/:id')
      .get((req, res) => {

         const users = []
         db.each('SELECT name, email FROM Users WHERE id = ?', req.params.id, (err, row) => {
            users.push(row)
         }, (err, count) => {
            if (err) {
               res.status(412).json({ msg: error.message })
            } else {
               res.status(200).json({ users })
            }
         })
   
      })
      .delete((req, res) => {

         const stmt = db.prepare(`DELETE FROM Users WHERE id = ?`)
         stmt.run(req.params.id)
         stmt.finalize(err => {
            if (err) {
               res.status(412).json({ msg: error.message })
            } else {
               res.status(200).json({ status: 'OK' })
            }
         })
   
      })
}