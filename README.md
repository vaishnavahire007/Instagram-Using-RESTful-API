# 📸 Instagram Page(Node.js + Express)

This is a beginner-friendly Instagram-style web application built using **Node.js**, **Express.js**, and **EJS** template engine. It demonstrates REST API concepts with full **CRUD operations**, **image uploads**, and a simple frontend — all without using any database.

Posts are stored **in memory** (as an array), and images are saved **locally** using `multer`.

---

## 🚀 Features

- 🖼 Upload and display images
- ✍️ Add caption for each post
- ❤️ Like a post
- 💬 Comment on a post
- 📝 Edit post caption
- ❌ Delete a post
- 📱 Clean and responsive Instagram-like UI

---

## 📁 Folder Structure
```
instagram-clone/
├── public/
│ ├── uploads/ # Uploaded images
│ └── style.css # All custom styling
├── views/ # EJS templates (frontend pages)
│ ├── index.ejs # Show all posts
│ ├── new.ejs # Form to create new post
│ ├── show.ejs # Show single post + like/comment
│ └── edit.ejs # Edit post caption
├── index.js # Main Express server
├── package.json # Project metadata and scripts
```

---

## 🧪 Tech Stack

- **Node.js**
- **Express.js**
- **EJS** (Templating engine)
- **Multer** (For file uploads)
- **UUID** (For unique post IDs)
- **Method-Override** (To use PUT/PATCH/DELETE in forms)
- **HTML/CSS** (Basic frontend)

---

## ⚙️ Installation & Setup

### Step 1: Clone the repository

bash
git clone https://github.com/your-username/instagram-clone.git
cd instagram-clone

### Step 2: Install all dependencies

npm install express ejs multer uuid method-override

You can also install nodemon globally for auto-reloading:

npm install -g nodemon

### Step 3: Create uploads folder for storing images

mkdir -p public/uploads

### Step 4: Start the server

node index.js

### Or if using nodemon:

nodemon index.js

### Step 5: Open in browser

http://localhost:8080/posts

---

## 📸 How to Use
Click "Create New Post".

Upload an image from your computer.

Add a caption and submit.

View the post to:

❤️ Like it

💬 Add a comment

✏️ Edit the caption

🗑️ Delete the post

✅ Note: All data is stored in memory — restarting the server will clear all posts.

---

## 🛠 Customization Tips
You can change the CSS in public/style.css to match Instagram even more.

To save posts permanently, consider integrating MongoDB or Firebase later.

---

## 👩‍💻 Author

**Vaishnav Ahire**  
GitHub: [@vaishnavahire007](https://github.com/vaishnavahire007)  
Email: [vaishnavahire007@example.com](mailto:vaishnavahire007@example.com)


---

## ⭐ Like This Project?
If this helped you learn, give it a ⭐ on GitHub and share it!

---

## 📜 License
This project is for educational purposes only. No commercial use intended.

📌 **To Use This in GitHub**:

1. Copy the entire content above
2. Create a file in your project root: `README.md`
3. Paste and save

Let me know if you also want:
- A `package.json` ready-made
- Deployment instructions (Render, Vercel, etc.)
- MongoDB version of this project

I'm here to help!
