const mongoose = require("mongoose");

/* USER SCHEMA */

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        default: "user"
    }

});

/* BLOG SCHEMA */

const blogSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        unique: true
    },

    content: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

const User = mongoose.model("User", userSchema);
const Blog = mongoose.model("Blog", blogSchema);

module.exports = {
    User,
    Blog
};