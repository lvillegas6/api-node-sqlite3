module.exports = {
    Tasks: `
    CREATE TABLE IF NOT EXISTS Tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        done INTEGER DEFAULT "0" NOT NULL,
        user_id INTEGER,
        FOREIGN KEY(user_id) REFERENCES Users(id)
            ON DELETE CASCADE
            ON UPDATE NO ACTION
    );
    `,
    Users: `
    CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        password TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
    );
    `
}