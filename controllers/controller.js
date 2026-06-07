const array = require(`../data/data`)

function index(req, res) {
    res.json(array)
}


function Show(req, res) {
    const id = parseInt(req.params.id)
    const singleOBJ = array.find((obj) => obj.id === id)

    if (!singleOBJ) {

        res.status(404)

        return res.json({
            error: "Not Found",
            message: "Object doesn't exist"
        })
    }
    res.json(singleOBJ)
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
    const id = parseInt(req.params.id)
    const product = array.find((product) => product.id === id)

    if (!product) {
        res.status(404)
        return res.json({
            error: "Not Found",
            message: "Object doesn't exist"
        })
    }

    array.splice(array.indexOf(product), 1)


    console.log(array);

    res.sendStatus(204)
}

module.exports = { index, Show, Create, Update, Modify, Delete }