# Express Simple App

A simple Express.js backend project with basic routes and a frontend demo.  
This project is perfect for practicing HTTP methods (`GET` and `POST`), CORS handling, and connecting a frontend with an Express backend.

---

## Features

- **GET routes**: `/`, `/about`, `/contact`, `/products`, `/products/:id`, `/message`  
- **POST route**: `/message` — submit a name and message from the frontend form  
- **CORS enabled**: Allows requests from `localhost` and `127.0.0.1`  
- **JSON handling**: Frontend sends JSON data, backend responds with JSON  
- **Frontend demo**: Includes a simple HTML page to test backend routes  

---

## Project Structure

```
express-simple/
├── index.html       # Frontend demo page
├── products.js      # Sample product data
├── server.js        # Express server with routes
└── .gitignore       # Ignore node_modules, IDE settings, and logs
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nad-15/express-simple.git
cd express-simple
```

### 2. Install dependencies

```bash
npm install express cors
```

### 3. Run the server

```bash
node server.js
```

- The server will start at [http://localhost:3000](http://localhost:3000)

### 4. Test the app

- Open `index.html` in your browser  
- Try the frontend buttons and forms to test GET and POST requests  

---

## Notes

- `node_modules/` is excluded from Git via `.gitignore`  
- Make sure your frontend URL matches the CORS origin in `server.js` (default is `http://127.0.0.1:5500`)  

---

## License

This project is for practice and learning purposes.
