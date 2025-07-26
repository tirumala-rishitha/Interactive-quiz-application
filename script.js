// Quiz Application JavaScript

// Question Bank
const questionBank = {
    general: [
        {
            id: 1,
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            correctAnswer: 2,
            image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg"
        },
        {
            id: 2,
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correctAnswer: 1,
            image: "https://images.pexels.com/photos/73873/mars-mars-rover-space-travel-robot-73873.jpeg"
        },
        {
            id: 3,
            question: "Who painted the Mona Lisa?",
            options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"],
            correctAnswer: 2,
            image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg"
        },
        {
            id: 4,
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correctAnswer: 3,
            image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg"
        },
        {
            id: 5,
            question: "Which country invented pizza?",
            options: ["France", "Italy", "Greece", "Spain"],
            correctAnswer: 1,
            image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg"
        }
    ],
    science: [
        {
            id: 6,
            question: "What is the chemical symbol for Gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            correctAnswer: 2,
            image: "https://images.pexels.com/photos/8369645/pexels-photo-8369645.jpeg"
        },
        {
            id: 7,
            question: "How many bones are in the human body?",
            options: ["206", "207", "208", "205"],
            correctAnswer: 0,
            image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg"
        },
        {
            id: 8,
            question: "What is the speed of light in vacuum?",
            options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "298,792,458 m/s"],
            correctAnswer: 0,
            image: "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg"
        },
        {
            id: 9,
            question: "What gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            correctAnswer: 2,
            image: "https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg"
        },
        {
            id: 10,
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            correctAnswer: 2,
            image: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg"
        }
    ],
    history: [
        {
            id: 11,
            question: "In which year did World War II end?",
            options: ["1944", "1945", "1946", "1947"],
            correctAnswer: 1,
            image: "https://images.pexels.com/photos/8846041/pexels-photo-8846041.jpeg"
        },
        {
            id: 12,
            question: "Who was the first person to walk on the moon?",
            options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
            correctAnswer: 1,
            image: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg"
        },
        {
            id: 13,
            question: "Which ancient wonder of the world was located in Alexandria?",
            options: ["Hanging Gardens", "Lighthouse of Alexandria", "Colossus of Rhodes", "Temple of Artemis"],
            correctAnswer: 1,
            image: "https://images.pexels.com/photos/8199672/pexels-photo-8199672.jpeg"
        },
        {
            id: 14,
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
            correctAnswer: 1,
            image: "https://images.pexels.com/photos/8846041/pexels-photo-8846041.jpeg"
        },
        {
            id: 15,
            question: "In which year did the Berlin Wall fall?",
            options: ["1987", "1988", "1989", "1990"],
            correctAnswer: 2,
            image: "https://images.pexels.com/photos/8199672/pexels-photo-8199672.jpeg"
        }
    ],
    sports: [
        {
            id: 16,
            question: "How many players are on a basketball team on the court at once?",
            options: ["4", "5", "6", "7"],
            correctAnswer: 1,
            image: "https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg"
        },
        {
            id: 17,
            question: "In which sport would you perform a slam dunk?",
            options: ["Tennis", "Basketball", "Volleyball", "Baseball"],
            correctAnswer: 1,
            image: "https://images.pexels.com/photos/1544947/pexels-photo-1544947.jpeg"
        },
        {
            id: 18,
            question: "Which country has won the most FIFA World Cups?",
            options: ["Germany", "Argentina", "Brazil", "Italy"],
            correctAnswer: 2,
            image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg"
        },
        {
            id: 19,
            question: "How many holes are there in a full round of golf?",
            options: ["16", "17", "18", "19"],
            correctAnswer: 2,
            image: "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg"
        },
        {
            id: 20,
            question: "In tennis, what is a score of zero called?",
            options: ["Love", "Nil", "Zero", "Nothing"],
            correctAnswer: 0,
            image: "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg"
        }
    ]
};

// Category Information
const categories = {
    general: { name: "General Knowledge", icon: "fas fa-star" },
    science: { name: "Science", icon: "fas fa-flask" },
    history: { name: "History", icon: "fas fa-clock" },
    sports: { name: "Sports", icon: "fas fa-futbol" }
};

// Game State
let currentCategory = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer = null;
let selectedAnswer = null;
let showingFeedback = false;
let answers = [];

// DOM Elements
const screens = {
    menu: document.getElementById('menu-screen'),
    category: document.getElementById('category-screen'),
    quiz: document.getElementById('quiz-screen'),
    results: document.getElementById('results-screen')
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    // Add entrance animation to body
    document.body.style.opacity = '0';
    document.body.style.transform = 'scale(0.95)';
    
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        // Animate body entrance
        document.body.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        document.body.style.opacity = '1';
        document.body.style.transform = 'scale(1)';
    }, 1000);
    
    // Show menu screen
    showScreen('menu');
    
    // Add particle effect
    createParticles();
    
    // Add floating elements
    createFloatingElements();
});

// Particle Effect
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        overflow: hidden;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(251, 191, 36, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
        `;
        particleContainer.appendChild(particle);
    }
    
    document.body.appendChild(particleContainer);
}

// Add floating animation for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes floatElement {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
        }
        25% {
            transform: translateY(-20px) rotate(5deg);
        }
        50% {
            transform: translateY(-10px) rotate(-3deg);
        }
        75% {
            transform: translateY(-15px) rotate(2deg);
        }
    }
    
    .floating-element {
        position: fixed;
        pointer-events: none;
        z-index: -1;
        opacity: 0.1;
        animation: floatElement 8s ease-in-out infinite;
    }
`;
document.head.appendChild(style);
// Screen Management
// Create floating elements
function createFloatingElements() {
    const elements = ['🧠', '📚', '🎯', '⭐', '🏆', '💡', '🎓', '🔬'];
    
    elements.forEach((element, index) => {
        const floatingEl = document.createElement('div');
        floatingEl.className = 'floating-element';
        floatingEl.textContent = element;
        floatingEl.style.cssText = `
            font-size: ${Math.random() * 30 + 20}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${index * 0.5}s;
            animation-duration: ${Math.random() * 4 + 6}s;
        `;
        document.body.appendChild(floatingEl);
    });
}

function showScreen(screenName) {
    // Enhanced exit animation for current screen
    const currentScreen = document.querySelector('.screen.active');
    if (currentScreen) {
        currentScreen.style.transform = 'translateY(-50px) scale(0.9) rotateX(10deg)';
        currentScreen.style.opacity = '0';
        currentScreen.style.filter = 'blur(5px)';
    }
    
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    setTimeout(() => {
        screens[screenName].classList.add('active');
        // Enhanced entrance animation
        screens[screenName].style.transform = 'translateY(0) scale(1) rotateX(0deg)';
        screens[screenName].style.opacity = '1';
        screens[screenName].style.filter = 'blur(0px)';
    }, 100);
}

function showMenuScreen() {
    showScreen('menu');
    resetGame();
    // Add special effect for returning to menu
    setTimeout(() => {
        const heroSection = document.querySelector('.hero-section');
        heroSection.style.animation = 'none';
        setTimeout(() => {
            heroSection.style.animation = 'heroEntrance 1.2s ease-out';
        }, 10);
    }, 200);
}

function showCategoryScreen() {
    showScreen('category');
    // Enhanced category card animations
    setTimeout(() => {
        const cards = document.querySelectorAll('.category-card');
        cards.forEach((card, index) => {
            card.style.animation = 'none';
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px) scale(0.8) rotateY(15deg)';
            card.style.filter = 'blur(5px)';
            setTimeout(() => {
                card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
                card.style.filter = 'blur(0px)';
            }, index * 150);
        });
    }, 200);
}

// Quiz Functions
function startQuiz(categoryId) {
    currentCategory = categoryId;
    currentQuestions = [...questionBank[categoryId]].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    answers = [];
    
    showScreen('quiz');
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
        return;
    }
    
    const question = currentQuestions[currentQuestionIndex];
    
    // Update progress
    updateProgress();
    
    // Update question counter
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = currentQuestions.length;
    
    // Update score display
    document.getElementById('current-score').textContent = score;
    
    // Load question content
    const questionImage = document.getElementById('question-image');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    
    // Set question image
    if (question.image) {
        questionImage.style.backgroundImage = `url(${question.image})`;
        questionImage.style.display = 'block';
    } else {
        questionImage.style.display = 'none';
    }
    
    // Set question text
    questionText.textContent = question.question;
    
    // Create options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.onclick = () => selectAnswer(index);
        
        // Add entrance animation to options
        button.style.opacity = '0';
        button.style.transform = 'translateX(-30px)';
        setTimeout(() => {
            button.style.transition = 'all 0.4s ease';
            button.style.opacity = '1';
            button.style.transform = 'translateX(0)';
        }, index * 100);
        
        button.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <span>${option}</span>
        `;
        
        optionsContainer.appendChild(button);
    });
    
    // Reset state
    selectedAnswer = null;
    showingFeedback = false;
    timeLeft = 30;
    
    // Hide feedback section
    document.getElementById('feedback-section').classList.add('hidden');
    
    // Start timer
    startTimer();
    
    // Enhanced question card animation
    document.getElementById('question-card').style.animation = 'none';
    document.getElementById('question-card').style.transform = 'scale(0.9) rotateY(10deg)';
    document.getElementById('question-card').style.opacity = '0';
    setTimeout(() => {
        const questionCard = document.getElementById('question-card');
        questionCard.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        questionCard.style.transform = 'scale(1) rotateY(0deg)';
        questionCard.style.opacity = '1';
    }, 100);
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

function startTimer() {
    clearInterval(timer);
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 10) {
            document.querySelector('.timer-section').classList.add('warning');
        }
        
        if (timeLeft <= 0) {
            handleTimeUp();
        }
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById('timer').textContent = timeLeft;
}

function selectAnswer(answerIndex) {
    if (showingFeedback) return;
    
    selectedAnswer = answerIndex;
    showingFeedback = true;
    
    // Stop timer
    clearInterval(timer);
    document.querySelector('.timer-section').classList.remove('warning');
    
    // Update UI
    const options = document.querySelectorAll('.option-btn');
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    options.forEach((option, index) => {
        option.disabled = true;
        
        if (index === currentQuestion.correctAnswer) {
            option.classList.add('correct');
        } else if (index === answerIndex && !isCorrect) {
            option.classList.add('incorrect');
        } else {
            option.classList.add('disabled');
        }
    });
    
    // Update score
    if (isCorrect) {
        score++;
        document.getElementById('current-score').textContent = score;
    }
    
    // Record answer
    answers.push({
        questionId: currentQuestion.id,
        correct: isCorrect,
        selectedAnswer: answerIndex,
        correctAnswer: currentQuestion.correctAnswer
    });
    
    // Show feedback
    showFeedback(isCorrect, false);
}

function handleTimeUp() {
    if (showingFeedback) return;
    
    showingFeedback = true;
    clearInterval(timer);
    document.querySelector('.timer-section').classList.remove('warning');
    
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option-btn');
    
    options.forEach((option, index) => {
        option.disabled = true;
        
        if (index === currentQuestion.correctAnswer) {
            option.classList.add('correct');
        } else {
            option.classList.add('disabled');
        }
    });
    
    // Record timeout
    answers.push({
        questionId: currentQuestion.id,
        correct: false,
        selectedAnswer: -1,
        correctAnswer: currentQuestion.correctAnswer
    });
    
    showFeedback(false, true);
}

function showFeedback(isCorrect, isTimeout) {
    const feedbackSection = document.getElementById('feedback-section');
    const feedbackMessage = document.getElementById('feedback-message');
    const nextBtn = document.getElementById('next-btn-text');
    
    // Set feedback message
    if (isTimeout) {
        feedbackMessage.textContent = "⏰ Time's up!";
        feedbackMessage.className = 'feedback-message timeout';
    } else if (isCorrect) {
        feedbackMessage.textContent = "🎉 Correct!";
        feedbackMessage.className = 'feedback-message correct';
    } else {
        feedbackMessage.textContent = "❌ Incorrect!";
        feedbackMessage.className = 'feedback-message incorrect';
    }
    
    // Set next button text
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.textContent = "View Results";
    } else {
        nextBtn.textContent = "Next Question";
    }
    
    // Show feedback section
    feedbackSection.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= currentQuestions.length) {
        showResults();
    } else {
        loadQuestion();
    }
}

function showResults() {
    showScreen('results');
    
    const percentage = Math.round((score / currentQuestions.length) * 100);
    const categoryName = categories[currentCategory].name;
    
    // Update category name
    document.getElementById('category-name').textContent = categoryName;
    
    // Update score display
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-total').textContent = currentQuestions.length;
    document.getElementById('percentage').textContent = `${percentage}%`;
    
    // Update score message and color
    const scoreMessage = document.getElementById('score-message');
    const finalScoreElement = document.getElementById('final-score');
    const scoreFill = document.getElementById('score-fill');
    
    if (percentage >= 80) {
        scoreMessage.textContent = "Excellent! 🎉";
        finalScoreElement.className = "text-green";
        scoreFill.className = "score-fill excellent";
    } else if (percentage >= 60) {
        scoreMessage.textContent = "Good job! 👍";
        finalScoreElement.className = "text-yellow";
        scoreFill.className = "score-fill good";
    } else {
        scoreMessage.textContent = "Keep practicing! 💪";
        finalScoreElement.className = "text-red";
        scoreFill.className = "score-fill poor";
    }
    
    // Animate score bar
    setTimeout(() => {
        scoreFill.style.width = `${percentage}%`;
    }, 500);
    
    // Create review items
    createReviewItems();
}

function createReviewItems() {
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '';
    
    answers.forEach((answer, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        
        const isCorrect = answer.correct;
        const statusText = isCorrect ? '✓ Correct' : 
                          answer.selectedAnswer === -1 ? '⏰ Time Up' : '✗ Incorrect';
        
        reviewItem.innerHTML = `
            <div class="review-question">
                <div class="review-number ${isCorrect ? 'correct' : 'incorrect'}">
                    ${index + 1}
                </div>
                <span class="text-white font-medium">Question ${index + 1}</span>
            </div>
            <div class="review-status ${isCorrect ? 'correct' : 'incorrect'}">
                ${statusText}
            </div>
        `;
        
        reviewContainer.appendChild(reviewItem);
    });
}

function retryQuiz() {
    startQuiz(currentCategory);
}

function resetGame() {
    currentCategory = '';
    currentQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 30;
    selectedAnswer = null;
    showingFeedback = false;
    answers = [];
    
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

// Utility Functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Keyboard Navigation
document.addEventListener('keydown', function(event) {
    if (screens.quiz.classList.contains('active') && !showingFeedback) {
        const key = event.key.toLowerCase();
        if (key >= 'a' && key <= 'd') {
            const index = key.charCodeAt(0) - 97; // Convert 'a' to 0, 'b' to 1, etc.
            const currentQuestion = currentQuestions[currentQuestionIndex];
            if (index < currentQuestion.options.length) {
                selectAnswer(index);
            }
        }
    }
    
    if (showingFeedback && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        nextQuestion();
    }
});

// Prevent context menu on images
document.addEventListener('contextmenu', function(event) {
    if (event.target.tagName === 'IMG') {
        event.preventDefault();
    }
});

// Add smooth scrolling for better UX
document.documentElement.style.scrollBehavior = 'smooth';