const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// -----
const itemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
})
module.exports = mongoose.model("Item", itemSchema, "items")