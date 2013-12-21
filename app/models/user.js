var DB = require("./init.js");

User = DB.Model.extend({
  tableName: 'users',

  initialize: function(username) {
    console.log("User" + username + "entry has been created in the database...");
  }
});

var noPhoneUsers = {};

saveToDB = function(profile, phone) {
  new User({
    uid: profile.id,
    first_name: profile.first_name,
    last_name: profile.last_name,
    photo: profile.photo,
    phone: phone,
  })
  .save()
  .then(function(model) {
    console.log("User model.username entry has been created");
  });
};

module.exports.addNoPhoneUser = function(profile) {
  noPhoneUsers[profile.id] = profile
};

module.exports.add = function(uid, phone) {
  saveToDB(noPhoneUser[uid], phone);
  delete noPhoneUser[uid];
};

module.exports.find = function(uid) {
  return new User({'uid': uid}).fetch();
};