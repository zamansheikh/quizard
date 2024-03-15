
// Questions for each category (demo questions)
const banglaBhashaQuestions = [
    { question: "বাংলা ভাষার উৎপত্তি কোথা থেকে?", options: ["সংস্কৃত", "প্রাকৃত", "পালি", "আপভ্রংশ"], answer: "আপভ্রংশ" },
    // Add more questions for this category
];

const banglaSahityaQuestions = [
    { question: "রবীন্দ্রনাথ ঠাকুরের প্রথম কাব্যগ্রন্থ কোনটি?", options: ["গীতাঞ্জলি", "সোনার তরী", "কavi Kahini", "চিত্রা"], answer: "কavi Kahini" },
    // Add more questions for this category
];

const banglaSanskritiQuestions = [
    { question: "বাংলাদেশের জাতীয় উৎসব কোনটি?", options: ["ঈদুল ফিতর", "দুর্গাপূজা", "পহেলা বৈশাখ", "বড়দিন"], answer: "পহেলা বৈশাখ" },
    // Add more questions for this category
];

// Get references to HTML elements
const questionsContainer = document.getElementById("questions-container");
const banglaBhashaBtn = document.getElementById("bangla-bhasha-btn");
const banglaSahityaBtn = document.getElementById("bangla-sahitya-btn");
const banglaSanskritiBtn = document.getElementById("bangla-sanskriti-btn");

// Function to display questions
function displayQuestions(questions) {
    questionsContainer.innerHTML = ""; // Clear previous questions

    questions.forEach((question, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `
            <h3>${index + 1}. ${question.question}</h3>
            <ul>
                ${question.options.map(option => `<li>${option}</li>`).join("")}
            </ul>
        `;
        questionsContainer.appendChild(questionElement);
    });
}

// Event listeners for category buttons
banglaBhashaBtn.addEventListener("click", () => displayQuestions(banglaBhashaQuestions));
banglaSahityaBtn.addEventListener("click", () => displayQuestions(banglaSahityaQuestions));
banglaSanskritiBtn.addEventListener("click", () => displayQuestions(banglaSanskritiQuestions));