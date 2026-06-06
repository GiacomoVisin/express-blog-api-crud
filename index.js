const express = require(`express`)
const app = express()
const port = 3000
const router = require(`./routes/products`)


app.listen(port, () => {
    console.log(`the app is workin on the port http://localhost:${port}`);
})

app.get(`/`, (req, res) => {
    res.send(`Index`)
})

app.get(`/`, (req, res) => {
    res.send(`Lista prodotti`)
})


app.get(`/:id`, (req, res) => {
    res.send(` Visualizza Prodotti per id ${req.params.id}`)
})

app.post(`/:id`, (req, res) => {
    res.send(` Crea Prodotti `)
})

app.put(`/:id`, (req, res) => {
    res.send(` Aggiorna Prodotti per id ${req.params.id}`)
})
app.patch(`/:id`, (req, res) => {
    res.send(` Modifica Prodotti per id ${req.params.id}`)
})
app.delete(`/:id`, (req, res) => {
    res.send(` Cancella Prodotti per id ${req.params.id}`)
})