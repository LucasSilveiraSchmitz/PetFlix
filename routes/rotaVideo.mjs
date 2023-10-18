import express from "express";
const router = express.Router();

import * as controller from '../controller/controllerVideo.mjs'

router.get("/videos/cachorro/:id", controller.videoCachorro);
router.get("/videos/gato/:id", controller.videoGato);

export default router