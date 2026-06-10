const express = require(`express`)
const app = express()
const port = 3001
const router = require(`./routes/products`)

app.use(express.json())
app.use(`/`,router)


app.listen(port, () => {
    console.log(`the app is working on the port http://localhost:${port}`);
})



