module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'User', 
        {
            userID: {
                type: DataTypes.Int(11),
                allowNull: true
            },
            studentID: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            email: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            phone: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            tokenAddress: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            tokenURI: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
            department: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: false,
        }
    )
};