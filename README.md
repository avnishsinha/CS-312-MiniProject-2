# CS-312 Mini-Project 2: API Integration

## 📌 Project Title:
**JokeOnYou (JOY) - Building a Website with Node.js, Express.js, Axios, and JokeAPI**

## 🎯 Objective:
To build a web app that takes a user's first and last name, sends it to the [JokeAPI](https://jokeapi.dev/), and displays a personalized joke in response. This demonstrates API integration, server-side rendering with EJS, and user input handling.

## 🛠 Tech Stack:
- Node.js
- Express.js
- Axios
- EJS (Embedded JavaScript Templates)
- HTML/CSS
- JavaScript (Client-side)

---

## 🚀 BONUS CHALLENGE FEATURES

### ✨ Enhanced Features Implemented:

1. **🎭 Joke Categories**
   - Multiple joke categories (Programming, Puns, Spooky, etc.)
   - Category selection with emoji indicators
   - Category-based filtering

2. **📚 Joke History & Search**
   - Complete joke history tracking
   - Search functionality across jokes and user names
   - Category-based filtering
   - Recent jokes display on home page

3. **⭐ Rating System**
   - 5-star rating system for each joke
   - Interactive star rating interface
   - Average rating calculations
   - Real-time rating updates

4. **❤️ Favorites System**
   - Save favorite jokes
   - Dedicated favorites page
   - Toggle favorite status
   - Visual favorite indicators

5. **📊 Statistics Dashboard**
   - Comprehensive statistics page
   - Total jokes, average ratings, favorites count
   - Category breakdown with progress bars
   - Fun facts and activity summary

6. **📤 Social Sharing**
   - Native share API support
   - Clipboard fallback for unsupported browsers
   - Share individual jokes with friends

7. **🎪 Multiple Jokes**
   - Get 1-5 jokes at once
   - Batch joke generation
   - Individual rating and favoriting for each joke

8. **🔍 Advanced Search**
   - Search by joke content
   - Search by user names
   - Category filtering
   - Real-time search results

9. **📱 Responsive Design**
   - Mobile-first approach
   - Touch-friendly interfaces
   - Adaptive layouts for all screen sizes

10. **⚡ Performance Optimizations**
    - In-memory joke storage (up to 50 jokes)
    - Efficient search algorithms
    - Optimized rendering

---

## 📂 Project Structure
```
CS-312-MiniProject-2/
├── app.js                 # Main server file with bonus features
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Locked dependency versions
├── public/
│   └── css/
│       └── style.css      # Enhanced styling with bonus features
├── views/
│   ├── partials/
│   │   ├── header.ejs     # Enhanced header with meta tags
│   │   └── footer.ejs     # Footer with JavaScript enhancements
│   ├── home.ejs          # Enhanced home page with categories
│   ├── new.ejs           # Joke results with ratings/favorites
│   ├── edit.ejs          # Error handling page
│   ├── history.ejs       # NEW: Joke history and search
│   ├── favorites.ejs     # NEW: Favorite jokes page
│   └── stats.ejs         # NEW: Statistics dashboard
└── README.md             # Project documentation
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
   npm start
   # or
   node app.js
   ```

4. Open in your browser:
   ```
   http://localhost:3000
   ```

---

## 🔍 Core Features
- User form to enter name and select joke category
- Dynamic API call to JokeAPI with category filtering
- EJS rendering of personalized jokes
- Error handling and user-friendly messages
- Clean responsive UI with header/footer partials

## 🎉 Bonus Features
- **Joke Categories**: Choose from 6 different joke categories
- **Multiple Jokes**: Get 1-5 jokes at once
- **Rating System**: Rate jokes from 1-5 stars
- **Favorites**: Save and manage favorite jokes
- **History**: View and search through all jokes
- **Statistics**: Comprehensive usage analytics
- **Search**: Find jokes by content or user names
- **Sharing**: Share jokes with friends
- **Responsive Design**: Works perfectly on all devices

---

## 📱 Pages & Routes

### Core Pages:
- **Home** (`/`) - Main joke generator with categories
- **Joke Results** (`/get-joke`) - Display jokes with ratings
- **Error** (`/edit`) - Error handling page

### Bonus Pages:
- **History** (`/history`) - Complete joke history with search
- **Favorites** (`/favorites`) - Saved favorite jokes
- **Statistics** (`/stats`) - Usage analytics and fun facts

### API Endpoints:
- `POST /rate-joke` - Rate a joke (AJAX)
- `POST /toggle-favorite` - Toggle favorite status (AJAX)
- `GET /api/random-joke` - Get random joke (JSON API)

---

## ✅ Submission Checklist
- [x] Code pushed to public GitHub repo
- [x] All required files included
- [x] Video link shared via Canvas
- [x] JokeAPI integration tested
- [x] Works across devices
- [x] **BONUS: Enhanced features implemented**
- [x] **BONUS: Multiple joke categories**
- [x] **BONUS: Rating and favorites system**
- [x] **BONUS: Search and history functionality**
- [x] **BONUS: Statistics dashboard**
- [x] **BONUS: Social sharing capabilities**

---

## 🎯 Learning Outcomes
This project demonstrates:
- **API Integration**: Seamless integration with external APIs
- **Server-Side Rendering**: Dynamic content generation with EJS
- **User Experience**: Intuitive interfaces and interactions
- **Data Management**: In-memory storage and state management
- **Responsive Design**: Cross-device compatibility
- **Modern Web Development**: Contemporary UI/UX patterns

---

## 📜 License
For educational use under CS-312 Web Programming II.