const isLoggedIn = (req, res, next) => {
    console.log("from isLoggedIn");
    // res.send("from isLoggedIn");
    next();
}

const isValidUser = (req, res) => {
    console.log("from isValidUser");
    res.send("from isValidUser");
    // next();
}

// module.exports = {isLoggedIn: isLoggedIn, isValidUser: isValidUser}
module.exports = {isLoggedIn, isValidUser}