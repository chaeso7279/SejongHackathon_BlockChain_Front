const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auctions', {
    auctionID: {
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
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ownerAddress: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sellerAddress: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    buyerAddress: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    repoAddress: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    confirmed: {
      type: "ENUM('CF_DEF','CF_OK','CF_CL')",
      allowNull: false
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    finalized: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'auctions',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "auctionID" },
        ]
      },
      {
        name: "Au_userid",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
