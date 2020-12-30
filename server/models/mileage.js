const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mileage', {
    m_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'userid'
      }
    },
    m_history: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    m_depositwithdraw: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mileage',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "m_id" },
        ]
      },
      {
        name: "Mi_userid",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
