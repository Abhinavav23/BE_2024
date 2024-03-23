const app = require("./app");
const dotENV = require("dotenv");
dotENV.config();
require("../dbConnect");

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server started at PORT ${PORT}`);
});
