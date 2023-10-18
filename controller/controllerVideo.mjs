import VideoFacade from "../facades/videos.mjs"
const videoFacade = new VideoFacade();

const videoCachorro = async (req, res) => {
    const id = req.params.id;

    const resultado = await videoFacade.videoCachorro(id)
    res.status(200).send({ video: resultado})
}

const videoGato =  async (req, res) => {
    const id = req.params.id

    const resultado = await videoFacade.videoGato(id)
    res.status(200).send({ video: resultado})
}

export { videoCachorro,videoGato}