const mongoose = require("mongoose");

const modelsSchema = mongoose.Schema({
    UserName : {type : String, required : true},
    Model : {type : Buffer, required : true},
    InputVariable : {type : [String], required : true},
    TargetVariable : {type : [String], required : true},
    ModelID : {type : Number , required : true},
    DatasetID : {type : Number, default : 0}
});


const modelsModel = mongoose.model("Models", modelsSchema);

module.exports = modelsModel;