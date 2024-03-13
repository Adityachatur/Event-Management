const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    event: {
        type: String,
        require: true,
    },
    comment: {
        type: String,
        require: true,
    }
})




// create the model with collection name


const user = new mongoose.model("User", userSchema)
module.exports = user;