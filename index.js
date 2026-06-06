const express = require(`express`)
const app = express()
const port = 3000

app.listen(port,()=>{
    console.log(`the app is workin on the port http://localhost: ${port}`);
})