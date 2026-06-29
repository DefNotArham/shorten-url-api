# 🔗 URL Shortener API

A fast and simple **URL shortening API** built with **Node.js, Express, TypeScript, and MongoDB**.

Create shortened links, redirect users to the original URL, and track the number of clicks.

---

## 🚀 Features

- 🔗 Create shortened URLs
- ⚡ Fast redirects
- 🧬 Unique short code generation using NanoID
- ✅ URL validation
- 📊 Click tracking
- 🗄️ MongoDB database storage
- 🔒 Prevent duplicate short codes
- ⏱️ Automatic timestamps

---

## 🛠️ Tech Stack

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)

---

# ⚙️ How It Works

1. User sends a URL to the API
2. API validates the URL
3. A unique short code is generated
4. The URL is stored in MongoDB
5. User receives a shortened URL
6. Visiting the shortened URL redirects to the original website
7. Each visit increments the click counter

