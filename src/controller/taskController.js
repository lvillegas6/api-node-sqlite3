import db from '../db/database'

export function createTask(req, res){
    const stmt = db.prepare(`INSERT INTO Tasks VALUES (?, ?, ?, ?)`)
    stmt.run(Object.values(req.body))
    stmt.finalize(err => {
       if (err) {
          res.status(412).json({ msg: err.message })
       } else {
          res.status(200).json({ status: 'OK' })
       }
    })
}
export function getTasks(req, res){
    const Tasks = []
    db.each('SELECT Tasks.id, title, done, name FROM Tasks JOIN Users ON Tasks.user_id = Users.id', (err, row) => {
        Tasks.push(row)
    }, (err, count) => {
       if (err) {
          res.status(412).json({ msg: err.message })
       } else {
          res.status(200).json({ Tasks: Tasks })
       }
    })
}
export function getTask(req, res){
    let task = undefined
    const stmt = db.prepare(`SELECT Tasks.id, title, done, name FROM Tasks JOIN Users ON Tasks.user_id = Users.id WHERE Tasks.id = ?`)
    stmt.each(req.params.id, (err, row) => {
        task = row
    }, (err, count) => {
       if (err) {
          res.status(412).json({ msg: err.message })
       } else {
          res.status(200).json({ Task: task })
       }
    })
}