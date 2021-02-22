import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'
import orphanagesController from './controllers/orphanagesController'
import usersController from './controllers/usersController'

const routes = Router()
const upload = multer(uploadConfig)

routes.get('/admin/registered', orphanagesController.index)
routes.get('/admin/pending', orphanagesController.index)
routes.get('/orphanages/:id', orphanagesController.show)
routes.post('/orphanages', upload.array('images'), orphanagesController.create)
routes.post('/edit/:id', orphanagesController.update)
routes.post('/users', usersController.create)

export default routes