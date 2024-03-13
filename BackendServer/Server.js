require("dotenv").config();
const express = require('express')
const cors = require("cors");
const app = express()
const router = require('./router/Register')
const connectdb = require('./Utility/DB');

const corsOption = {
    origin: "https://event-management-allevent.vercel.app",
    method: "POST , GET , PUT , DELETE",
    credentials: true,
};
app.use(cors(corsOption));
app.use(express.json());
app.use('/api/register', router);
//Http request type 1
  app.get('/', function (req, res) {
    res.status(200).send('Hello World')
 })

// app.get('/register', function (req, res) {
//     res.status(200).send("Register page")
// })

const PORT = 3001;
connectdb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on the prt of : ${PORT}`)
    })
})
