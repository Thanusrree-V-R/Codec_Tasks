const jwt = require("jsonwebtoken");

/* CHECK LOGIN */

const isLoggedIn = (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.redirect("/login");
    }

    try {

        const user = jwt.verify(token, process.env.JWT_SECRET);

        req.user = user;

        next();

    } catch (err) {

        return res.redirect("/login");

    }

};

/* CHECK ADMIN */

const isAdmin = (req, res, next) => {

    if (req.user.role !== "admin") {

        return res.send("Access Denied");

    }

    next();

};

module.exports = {

    isLoggedIn,

    isAdmin

};