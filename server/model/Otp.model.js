const mongoose = require('mongoose')

const otpSchema = new mongoose.Schema({
    otp: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('otp', otpSchema)