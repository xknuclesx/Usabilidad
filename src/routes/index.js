import {Router} from 'express'
const router =Router()
router.get('/', (req, res) => res.render('index', { title: 'Aprende Jugando'}))
router.get('/educativo', (req, res) => res.render('educativo', { title: 'Aprende Jugando'}))
router.get('/instrucciones', (req, res) => res.render('instrucciones', { title: 'Aprende Jugando'}))
router.get('/juego', (req, res) => res.render('juego', { title: 'Aprende Jugando'}))

export default router