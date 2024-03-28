const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
    UserName : {type: String, required: true},
    Password : {type: String, required: true},
    Email : {type: String, required: true},
    Name : {type: String, required: true}
});

const usersModel = mongoose.model("Users", usersSchema);

module.exports = usersModel;