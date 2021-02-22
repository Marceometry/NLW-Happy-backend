import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/upload'
import orphanagesController from './controllers/orphanagesController'
import usersController from './controllers/usersController'

const routes = Router()
const upload = multer(uploadConfig)

routes.get('/orphanages', orphanagesController.index)
routes.get('/admin/registered', orphanagesController.index)
routes.get('/admin/pending', orphanagesController.index)
routes.get('/orphanages/:id', orphanagesController.show)
routes.get('/admin/delete/:id', orphanagesController.show)
routes.get('/admin/edit/:id', orphanagesController.show)
routes.post('/admin/edit/:id', orphanagesController.create)
routes.post('/orphanages', upload.array('images'), orphanagesController.create)
routes.post('/users', usersController.createUser)

export default routes