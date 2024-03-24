const jwt = require("jsonwebtoken");

const isUserValid = async(req, res, next) => {
    const { authorization } = req.headers;
    if (authorization) {
      const token = authorization.split(" ")[1];
      try {
        const userInfo = jwt.verify(token, process.env.SECRET_KEY);
        const { userId } = userInfo;
        req.userId = userId;
        console.log("moving next");
        next();
      } catch (err) {
        res.status(400).json({ status: "failed", message: err.message });
      }
    } else {
      res
        .status(400)
        .json({ status: "failed", message: "missing Authorization" });
    }
};

module.exports = { isUserValid };
