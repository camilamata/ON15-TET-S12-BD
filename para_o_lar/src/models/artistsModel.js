const mongoose = require('mongoose')

//para indicar classe, começo com letra maiúscula
//essa const é uma classe
const ArtistSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    artist: String,
    albumsNumber: Number,
    genre: [String],
    allAlbums: Boolean,
})
const Model = mongoose.model("artist", ArtistSchema)

module.exports = Model
    
