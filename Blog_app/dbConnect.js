const mongoose = require("mongoose");
// make the connection with cloud database

mongoose.connect(process.env.MONGODB_CONNECTION_URL)
.then(() => {
    console.log(`database connection successful`);
})
.catch((err) => {
    console.log(`error: ${err.message}`);
})