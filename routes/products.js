const express = require(`express`)
const router = express.Router()


router.get(`/`, (req, res) => {
    res.send(`Index`)
})

router.get(`/product`, (req, res) => {
    res.send(`Lista prodotti`)
})


router.get(`/product:id`, (req, res) => {
    res.send(` Visualizza Prodotti per id ${req.params.id}`)
})

router.post(`/product:id`, (req, res) => {
    res.send(` Crea Prodotti `)
})

router.put(`/product:id`, (req, res) => {
    res.send(` Aggiorna Prodotti per id ${req.params.id}`)
})
router.patch(`/product:id`, (req, res) => {
    res.send(` Modifica Prodotti per id ${req.params.id}`)
})
router.delete(`/product:id`, (req, res) => {
    res.send(` Cancella Prodotti per id ${req.params.id}`)
})

module.exports = router