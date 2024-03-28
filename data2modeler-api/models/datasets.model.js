const mongoose = require("mongoose");

const datasetsSchema = mongoose.Schema({
    UserName : {type : String, required : true},
    Dataset : {type : Buffer, required : true},
    DatasetID : {type : Number, required : true},
    ModelID : {type : Number, default : 0}
});

const datasetsModel = mongoose.model("Datasets", datasetsSchema);

module.exports = datasetsModel;