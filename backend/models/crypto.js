const mongoose = require('mongoose')
const Schema = mongoose.Schema


const cryptoSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true
        },

        last_hour: {
            type: Number,
            required: false
        },

        last_day: {
            type: Number,
            required: false,
        },
        
        marketCap: {
            type:Number
        },

        volume: {
            type:Number
        }

    }
)

const Crypto = mongoose.model('Crypto', cryptoSchema);
module.exports = Crypto;
