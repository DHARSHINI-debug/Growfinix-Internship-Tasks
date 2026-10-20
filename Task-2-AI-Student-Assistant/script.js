const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const statusText = document.getElementById("status");

function addMessage(text, className) {
    const message = document.createElement("div");
    message.className = className;
    message.textContent = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function askQuestion(question) {
    userInput.value = question;
    sendMessage();
}

function sendMessage() {
    const question = userInput.value.trim();

    if (!question) {
        statusText.textContent = "Please enter a question first.";
        return;
    }

    addMessage(question, "user-message");
    userInput.value = "";
    statusText.textContent = "Assistant is thinking...";

    setTimeout(function () {
        const q = question.toLowerCase();
        let answer;

        if (q.includes("artificial intelligence") || q.includes("explain ai")) {
            answer = "AI enables computers to perform tasks that usually require human intelligence, such as learning and problem-solving.";
        } else if (q.includes("study")) {
            answer = "Study tips: study for 25 minutes, take a 5-minute break, practise questions, and revise regularly.";
        } else if (q.includes("python")) {
            answer = "Python is a beginner-friendly programming language. Start with variables, conditions, loops, and functions.";
        } else if (q.includes("exam")) {
            answer = "Prepare for exams by making a timetable, practising previous questions, and revising important topics.";
        } else if (q.includes("time management") || q.includes("manage time")) {
            answer = "Make a task list, prioritize important work, assign time slots, and take short breaks.";
        } else if (q.includes("programming")) {
            answer = "Programming means writing instructions for computers. Begin with variables, conditions, loops, and functions.";
        } else if (q.includes("hello") || q.includes("hi")) {
            answer = "Hello! How can I help you today? Ask me about AI, Python, exams, or study tips.";
        } else {
            answer = "I'm a student assistant demo. Try asking about AI, Python, programming, exams, or time management.";
        }

        addMessage(answer, "bot-message");
        statusText.textContent = "";
    }, 900);
}

document.getElementById("chat-form").addEventListener("submit", function (event) {
    event.preventDefault();
    sendMessage();
});