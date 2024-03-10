const mongoose = require("mongoose");
console.log("inside connect Db file");
// make the connection with cloud database


mongoose.connect(process.env.MONGODB_CONNECTION_URL)
.then(() => {
    console.log(`database connection successful`);
})
.catch((err) => {
    console.log(`error: ${err.message}`);
})