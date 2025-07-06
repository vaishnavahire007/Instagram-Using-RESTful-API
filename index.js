const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
const multer = require("multer");

const app = express();
const port = 8080;

// EJS and Public
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Multer setup for image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage });

// In-memory posts array
let posts = [
    {
        id: uuidv4(),
        username: "vaishnav-ahire",
        caption: "See My New Profile Photo",
        imageUrl: "/uploads/img1.jpg",
        likes: 0,
        comments: [],
    },
    {
        id: uuidv4(),
        username: "ashutosh-ranjan",
        caption: "My new gibili image created by chatgpt",
        imageUrl: "/uploads/img2.jpg",
        likes: 0,
        comments: [],
    },
    {
        id: uuidv4(),
        username: "kavya-maren",
        caption: "Aaj bhi haar gaye a and esko ice-cream ki padi hai..",
        imageUrl: "/uploads/img3.jpg",
        likes: 0,
        comments: [],
    },
];


// ================= ROUTES =================

// View all posts
app.get("/posts", (req, res) => {
    res.render("index", { posts });
});

// Form to create new post
app.get("/posts/new", (req, res) => {
    res.render("new");
});

// Create a new post
app.post("/posts", upload.single("image"), (req, res) => {
    const { username, caption } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;
    posts.push({
        id: uuidv4(),
        username,
        caption,
        imageUrl: imagePath,
        likes: 0,
        comments: [],
    });
    res.redirect("/posts");
});

// View single post
app.get("/posts/:id", (req, res) => {
    const post = posts.find((p) => p.id === req.params.id);
    res.render("show", { post });
});

// Like a post
app.post("/posts/:id/like", (req, res) => {
    const post = posts.find((p) => p.id === req.params.id);
    post.likes++;
    res.redirect(`/posts/${post.id}`);
});

// Add comment
app.post("/posts/:id/comment", (req, res) => {
    const post = posts.find((p) => p.id === req.params.id);
    post.comments.push(req.body.comment);
    res.redirect(`/posts/${post.id}`);
});

// Form to edit post
app.get("/posts/:id/edit", (req, res) => {
    const post = posts.find((p) => p.id === req.params.id);
    res.render("edit", { post });
});

// Update caption
app.patch("/posts/:id", (req, res) => {
    const post = posts.find((p) => p.id === req.params.id);
    post.caption = req.body.caption;
    res.redirect("/posts");
});

// Delete post
app.delete("/posts/:id", (req, res) => {
    posts = posts.filter((p) => p.id !== req.params.id);
    res.redirect("/posts");
});

// Start server
app.listen(port, () => {
    console.log(`Instagram clone running at http://localhost:${port}`);
});
