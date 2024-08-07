  
  const mongoose = require('mongoose');  
  const TempDb = new mongoose.Schema({
    id: { type: String,  unique: true ,required: true, default:"𝙳𝚁𝙰𝙶𝙾𝙽-𝚅1"},
    creator: { type: String, default: "𝙳𝚁𝙰𝙶𝙾𝙽" },
    data: { type: Object, default: {} }
  });  
  const dbtemp = mongoose.model("dbtemp", TempDb)
  module.exports = { dbtemp }
  
