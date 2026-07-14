require("dotenv").config();

const express = require("express");
const path = require("path");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const connectDB = require("./db");

const app = express();

connectDB();

app.use(helmet());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {

    res.render("index", {

        title: "Blog Website"

    });
    app.get("/register", (req, res) => {
    res.render("auth", {
        title: "Register",
        type: "register"
    });
});

app.get("/login", (req, res) => {
    res.render("auth", {
        title: "Login",
        type: "login"
    });
});

app.get("/dashboard", (req, res) => {
    res.render("dashboard", {
        title: "Dashboard"
    });
});

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`🚀 Server running on http://localhost:${PORT}`);

});
