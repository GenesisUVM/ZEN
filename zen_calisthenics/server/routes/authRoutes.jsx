import {Router} from "express"
import {registro, login} from '../controlers.jsx/authControlers'

const router = Router()

router.post('/registro', registro)
router.post('/login' , login)