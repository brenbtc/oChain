const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nftSchema = new Schema(
    {
        collection: {
            type: String,
            required: true
        },

        nftid: {
            type: Number,
            required: true
        },

        price: {
            type: Number,
            required: true
        },

        floor: {
            type: Number,
        }

    }
)

const Nft = mongoose.model('NFT', nftSchema);
module.exports = Nft;
