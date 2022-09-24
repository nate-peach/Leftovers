const mongoose = require("mongoose");

const WasteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    available: {
        type: Boolean,
        //required?
    },
});

module.exports = mongoose.model("Waste", WasteSchema);