var DataTypes = require("sequelize").DataTypes;
var _ShareTalent = require("./ShareTalent");
var _ShareTalentApply = require("./ShareTalentApply");
var _auctions = require("./auctions");
var _auctions_apply = require("./auctions_apply");
var _mileage = require("./mileage");
var _mileage_apply = require("./mileage_apply");
var _money = require("./money");
var _user = require("./user");

function initModels(sequelize) {
  var ShareTalent = _ShareTalent(sequelize, DataTypes);
  var ShareTalentApply = _ShareTalentApply(sequelize, DataTypes);
  var auctions = _auctions(sequelize, DataTypes);
  var auctions_apply = _auctions_apply(sequelize, DataTypes);
  var mileage = _mileage(sequelize, DataTypes);
  var mileage_apply = _mileage_apply(sequelize, DataTypes);
  var money = _money(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  ShareTalent.belongsTo(user, { foreignKey: "userid"});
  user.hasMany(ShareTalent, { foreignKey: "userid"});
  ShareTalentApply.belongsTo(ShareTalent, { foreignKey: "st_id"});
  ShareTalent.hasMany(ShareTalentApply, { foreignKey: "st_id"});
  ShareTalentApply.belongsTo(user, { foreignKey: "userid"});
  user.hasMany(ShareTalentApply, { foreignKey: "userid"});
  auctions.belongsTo(user, { foreignKey: "userid"});
  user.hasMany(auctions, { foreignKey: "userid"});
  auctions_apply.belongsTo(auctions, { foreignKey: "auctionID"});
  auctions.hasMany(auctions_apply, { foreignKey: "auctionID"});
  auctions_apply.belongsTo(user, { foreignKey: "userid"});
  user.hasMany(auctions_apply, { foreignKey: "userid"});
  mileage.belongsTo(user, { foreignKey: "userid"});
  user.hasMany(mileage, { foreignKey: "userid"});
  mileage_apply.belongsTo(user, { foreignKey: "userid"});
  user.hasMany(mileage_apply, { foreignKey: "userid"});
  money.belongsTo(user, { foreignKey: "userid"});
  user.hasMany(money, { foreignKey: "userid"});

  return {
    ShareTalent,
    ShareTalentApply,
    auctions,
    auctions_apply,
    mileage,
    mileage_apply,
    money,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
