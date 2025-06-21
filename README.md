# CS-312 Mini-Project 2: API Integration

## 📌 Project Title:
**Building a Website with Node.js, Express.js, Axios, and JokeAPI**

## 🎯 Objective:
To build a web app that takes a user’s first and last name, sends it to the [JokeAPI](https://jokeapi.dev/), and displays a personalized joke in response. This demonstrates API integration, server-side rendering with EJS, and user input handling.

## 🛠 Tech Stack:
- Node.js
- Express.js
- Axios
- EJS (Embedded JavaScript Templates)
- HTML/CSS

---

## 📂 Project Structure
```
CS-312-MiniProject-2/
├── app.js
├── package.json
├── package-lock.json
├── public/
│   └── css/
│       └── style.css
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── home.ejs
│   ├── new.ejs
│   └── edit.ejs
└── README.md
```

---

## 🚀 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/CS-312-MiniProject-2.git
   cd CS-312-MiniProject-2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node app.js
   ```

4. Open in your browser:
   ```
   http://localhost:3000
   ```

---

## 🔍 Features
- User form to enter name
- Dynamic API call to JokeAPI
- EJS rendering of personalized jokes
- Error handling and user-friendly messages
- Clean responsive UI with header/footer partials

---

## ✅ Submission Checklist
- [x] Code pushed to public GitHub repo
- [x] All required files included
- [x] Video link shared via Canvas
- [x] JokeAPI integration tested
- [x] works across devices

---

## 📜 License
For educational use under CS-312 Web Programming II.
