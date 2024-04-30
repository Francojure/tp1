const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    producto: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('stock', userSchema);