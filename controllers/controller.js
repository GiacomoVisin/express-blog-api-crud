function index(req, res) {
    res.send(`Index`)
}

function list(req, res) {
    res.send(`Lista prodotti`)
}

function listID(req, res) {
    res.send(` Visualizza Prodotti per id ${req.params.id}`)
}

function Create(req, res) {
    res.send(` Crea Prodotti `)
}

function Update(req, res) {
    res.send(` Aggiorna Prodotti per id ${req.params.id}`)
}

function Modify(req, res) {
    res.send(` Modifica Prodotti per id ${req.params.id}`)
}

function Delete(req, res) {
    res.send(` Cancella Prodotti per id ${req.params.id}`)
}

module.exports = { index, list, listID, Create, Update, Modify, Delete }