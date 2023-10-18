import * as videos from "../module/linkVideos.mjs"

export default class VideoFacade {

    async videoCachorro(id) {
        return videos.cachorro[id]
    }

    async videoGato(id) {
        return videos.gato[id]
    }
}