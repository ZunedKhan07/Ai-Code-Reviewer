# 🤖 AI Code Reviewer

A full-stack AI-powered code reviewer that uses Google's Gemini API to provide intelligent feedback on code. Built using **React** (frontend) and **Node.js/Express** (backend), this tool helps developers get smart, real-time reviews on their code snippets.

---

## 🚀 Features

- ✨ Submit code and get instant AI-generated suggestions
- 🤖 Powered by **Gemini 2.5 Flash** (Google Generative AI)
- 🧠 Detects bugs, inefficiencies, and improvements
- 🌐 Clean UI with Markdown & syntax highlighting
- 🔒 Secure API key management using `.env`

---

## 🛠️ Tech Stack

| Layer     | Tech Stack                                            |
|-----------|--------------------------------------------------------|
| Frontend  | React, Vite, Tailwind CSS, react-markdown, highlight.js |
| Backend   | Node.js, Express, dotenv, @google/generative-ai         |
| AI Model  | Google Gemini 2.5 Flash (Generative AI API)             |

---

## 📁 Project Structure

```
ai-code-reviewer/
│
├── frontend/        # React app
│   └── src/
│
├── backend/         # Node.js backend
│   └── src/
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔧 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-code-reviewer.git
cd ai-code-reviewer
```

### 🧪 2. Setup Backend

```bash
cd backend
npm install
```

🔐 Create a `.env` file and add:

```
GOOGLE_GEMINI_KEY=your_api_key_here
```

Start backend:

```bash
npm run dev
```

Runs at: `http://localhost:786`

---

### 💻 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Runs at: `http://localhost:5173`

---

## 📝 Environment Variables

| Variable Name        | Description                          |
|----------------------|--------------------------------------|
| `GOOGLE_GEMINI_KEY`  | Your Google Generative AI API Key    |

---

## 📸 Screenshots

_Add your app screenshots here if available._

---

## 🔮 Future Enhancements

- Upload files for code review
- Multi-language code support (Python, Java, etc.)
- User authentication + history
- Deploy on Vercel / Render

---

## 🧑‍💻 Author

**Juned Khan**  
GitHub: [@ZunedKhan07](https://github.com/ZunedKhan07)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
