const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 costume_type: String, 
 size: {type: String, maxlength: 6}, 
 cost:{ type: Number, min: 5, max: 32 }
},{
    writeConcern: {
      w: 'majority',
      j: true,
      wtimeout: 1000
    }}) 
 
module.exports = mongoose.model("Costumes", 
costumeSchema) 