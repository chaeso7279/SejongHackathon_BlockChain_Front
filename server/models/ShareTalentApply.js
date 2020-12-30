const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShareTalentApply', {
    sta_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    st_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ShareTalent',
        key: 'st_id'
      }
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'userid'
      }
    },
    managerok: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    feedback: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ShareTalentApply',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sta_id" },
        ]
      },
      {
        name: "STA_userid",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "STA_st_id",
        using: "BTREE",
        fields: [
          { name: "st_id" },
        ]
      },
    ]
  });
};
