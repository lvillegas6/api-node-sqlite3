
module.exports = app => {
    
    app.db.createDb().then(() => {
        app.listen(app.get('port'), () => {
            console.log('Server on port: ', app.get('port'))
        })
    })
}

