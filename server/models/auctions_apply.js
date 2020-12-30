const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auctions_apply', {
    aaID: {
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
    auctionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auctions',
        key: 'auctionID'
      }
    },
    applyok: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'auctions_apply',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "aaID" },
        ]
      },
      {
        name: "AA_userid",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "AA_auctionID",
        using: "BTREE",
        fields: [
          { name: "auctionID" },
        ]
      },
    ]
  });
};
