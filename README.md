# 🚀 QuizzApp

![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-learning%20project-blue)
![Tech](https://img.shields.io/badge/vanilla-JS-yellow)

A lightweight, single-topic quiz web app built with **vanilla JavaScript** and **Bootstrap** — pick an answer, get instant color feedback, and see your score at the end.

## ✨ Features
- **Instant feedback** – Selected answers are highlighted in **green** (correct) or **red** (wrong), with the correct option always revealed.
- **Progress tracking** – A live **progress bar** and question counter show how far you are through the quiz.
- **End screen & score** – Final view reports how many questions were answered **correctly** out of the total.
- **Restart flow** – One click resets state (`currentQuestion`, `rightQuestions`) and starts a **new game**.
- **Zero build step** – Pure **HTML/CSS/JS**, no bundler or package manager required.

## 📦 Prerequisites
Ensure you have the following installed:
- A modern web browser (Chrome, Firefox, Edge)
- Git (to clone the repository)
- Optional: a local static server (e.g. the **VS Code Live Server** extension) — recommended, since the app loads local images and scripts

## 🚀 Getting Started

### Installation
```bash
git clone https://github.com/DenisBode/Quizz-App.git
cd Quizz-App
```

### Configuration
```bash
# No configuration or environment variables required.
# Bootstrap 5.3.8 is loaded via CDN — an internet connection is needed on first load.
```

### Running the Application
```bash
# Simply open index.html in your browser:
start index.html        # Windows
# or serve it locally (recommended):
# VS Code -> "Open with Live Server"
```

## 💡 Usage
Add or edit questions directly in the `questions` array in `script.js`. Each entry follows this shape:

```javascript
let questions = [
    {
        "question": "Was bedeutet die Abkürzung 'CPU'?",
        "answer_1": "Central Processing Unit",
        "answer_2": "Computer Personal Unit",
        "answer_3": "Central Power User",
        "answer_4": "Control Process Utility",
        "right_answer": 1 // index (1–4) of the correct answer
    }
];
```

`right_answer` is the 1-based number of the correct option. The app reads `questions.length` automatically, so adding entries requires no further changes.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!
Please check the [Contributing Guide](CONTRIBUTING.md) before opening a Pull Request.

## 📄 License
Distributed under the [MIT](LICENSE) License. See `LICENSE` for more information.

## ⚠️ Disclaimer
This is a **learning / practice project** created for educational purposes.

The MIT license covers **only the author's own source code** (`index.html`, `style.css`, `script.js`). Third-party trademarks, assets, libraries, and data belong to their respective owners and are used here solely for learning:

- **Bootstrap 5.3.8** is a trademark of its maintainers and is loaded via CDN under its own MIT license. This project is **not affiliated with, endorsed by, or sponsored by** the Bootstrap team.
- The quiz questions and answers are **self-authored** for practice; no external quiz API or third-party dataset is used.
- Images (`img/quiz.jpg`, `img/trophy.png`) are included for demonstration only — verify their licensing before any reuse beyond learning.
