const mongoose = require('mongoose')

const gigSchema = mongoose.Schema(
    {
        clicks: {
            type: Number,
            require: true,
            default: 0
        },
        impression: {
            type: Number,
            require: true,
            default: 0
        },
        chatRequest: {
            type: String,
            require: true
        },
        chatResponse: {
            type: String,
            require: true
        }
        
    }
)