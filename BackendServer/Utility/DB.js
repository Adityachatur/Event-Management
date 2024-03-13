const mongoose = require('mongoose');
// const URL = "mongodb://localhost:27017/Event-Management";

const URL = process.env.MONGODBCONNECTION;
//const URL = "mongodb+srv://EventManagement:7GVHRgs3pKUv0tx4@cluster.ejepko1.mongodb.net/eventmanagement?retryWrites=true&w=majority&appName=Cluster";
const connectdb = async () => {
    try {
        await mongoose.connect(URL);
        console.log("Connection Successfully");
    } catch (error) {

        console.log("Connection failed");
        process.exit(0);
    }
}

module.exports = connectdb;