const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('money', {
    moneyid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    currentmoney: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    depositwithdraw: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'userid'
      }
    }
  }, {
    sequelize,
    tableName: 'money',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "moneyid" },
        ]
      },
      {
        name: "Mo_userid",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
