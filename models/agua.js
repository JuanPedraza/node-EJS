const mongoose = require("mongoose")
const schema = mongoose.Schema

const aguaSchema = new schema({
    dateStart: Date,
    dateEnd: Date,
    value: Number
}, {timestamps: true})
    
module.exports = mongoose.model('agua', aguaSchema )