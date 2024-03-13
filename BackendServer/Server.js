require("dotenv").config();
const express = require('express')
const app = express()
const router = require('./router/Register')
const connectdb = require('./Utility/DB');


app.use(express.json());
app.use('/api/register', router);
//Http request type 1
// app.get('/', function (req, res) {
//     res.status(200).send('Hello World')
// })

// app.get('/register', function (req, res) {
//     res.status(200).send("Register page")
// })

const PORT = 3001;
connectdb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on the prt of : ${PORT}`)
    })
})
