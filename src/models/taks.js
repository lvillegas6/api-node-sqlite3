module.exports = (sequelize, Datatype) => {

    const Tasks = sequelize.define('Tasks', {
        id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        done: {
             type: Datatype.BOOLEAN,
             allowNul: false,
             defaultValue: false,
        }
    })

    Tasks.associate = (models) => {
        Tasks.belongsTo(models.Users)
    }

    return Tasks
}