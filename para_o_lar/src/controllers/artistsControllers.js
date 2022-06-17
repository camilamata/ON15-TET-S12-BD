const ArtistsModel = require("../models/artistsModel")


const registerArtist = async (request, response) => {
    const {
        artist, albumsNumber, genre, allAlbums
    } = request.body

    if (!artist) {
        return response
            .status(400)
            .json({ message: "Informações obrigatórias!" })
    }

    try {
        const newArtist = new ArtistsModel({
            artist: artist,
            albumsNumber: albumsNumber,
            genre: genre,
            allAlbums: allAlbums

        })
        const registeredArtist = await newArtist.save()

        if (registeredArtist == undefined) {
            throw new Error("Não foi possível cadastrar.")
        }
        response.status(201).json(registeredArtist)
    } catch (error) {
        response.statis(500).json({ message: error.message })
    }
}

const getAllArtists = async (request, response) => {
    try {
        const artist = await ArtistsModel.find()
        response.status(200).json(artist)

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const getById = async (request, response) => {
    try {
        const findArtist = await ArtistModel.findById(request.params.id)

        if (!findArtist) {
            throw new Error("Não encontramos esse ID. Tente novamente.")
        }

        response.status(200).json(findArtist)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const getByName = async (request, response) => {
    try {

        const findArtist = await ArtistsModel.findOne({
            artist: request.query.artist
        })

        reponse.status(200).json(findArtist)

    } catch (error) {
        reponse.status(500).json({ message: error.message })
    }
}



module.exports = {
    registerArtist,
    getAllArtists,
    getById,
    getByName
}
