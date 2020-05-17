import db from '../db/database'

export function createUser(req, res){
    const stmt = db.prepare(`INSERT INTO Users VALUES (?, ?, ?, ?)`)
    stmt.run(Object.values(req.body))
    stmt.finalize(err => {
       if (err) {
          res.status(412).json({ msg: err.message })
       } else {
          res.status(200).json({ status: 'OK' })
       }
    })
}

export function getUsers(req, res){
    const users = []
    db.each('SELECT name, email FROM Users', (err, row) => {
       users.push(row)
    }, (err, count) => {
       if (err) {
          res.status(412).json({ msg: err.message })
       } else {
          res.status(200).json({ Users: users })
       }
    })
}

export function getUser(req, res){
    let user = undefined
    const stmt = db.prepare(`SELECT name, email FROM Users WHERE id = ?`)
    stmt.each(req.params.id, (err, row) => {
       user = row
    }, (err, count) => {
       if (err) {
          res.status(412).json({ msg: err.message })
       } else {
          res.status(200).json({ User: user })
       }
    })
}

