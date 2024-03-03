const app = require("./app");
const dotEnv = require('dotenv');
dotEnv.config();

// console.log("process.env", process.env.PORT);
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`express server started at port ${PORT}`);
})
