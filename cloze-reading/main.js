let quizData = [];
let currentQuestionIndex = 0;
let score = 0;
let allWordsPool = [];

// Turkish alphabet regex including special characters
const wordRegex = /[a-zA-ZğüşıöçĞÜŞİÖÇ]+/g;

function startTest() {
    const rawText = document.getElementById('input-text').value.trim();
    if (!rawText) return alert("Please enter some text.");

    // Basic sentence splitting (naive approach using punctuation)
    const sentenceStrings = rawText.match(/[^.!?]+[.!?]*/g) || [rawText];
    allWordsPool = Array.from(rawText.match(wordRegex) || []).map(m => m.toLowerCase());
    
    if (allWordsPool.length < 5) return alert("Text is too short to generate 5 options. Please provide more text.");

    quizData = [];
    currentQuestionIndex = 0;
    score = 0;

    sentenceStrings.forEach(sentence => {
        const words = Array.from(sentence.matchAll(wordRegex)).map(m => m);
        if (words.length === 0) return;

        // Pick a random word to hide (prefer words > 2 letters)
        let validWords = words.filter(w => w.length > 2);
        if (validWords.length === 0) validWords = words;
        const targetWord = validWords[Math.floor(Math.random() * validWords.length)];
        
        // Generate distractors
        let options = new Set([targetWord]);
        while(options.size < 5) {
            const randomDistractor = allWordsPool[Math.floor(Math.random() * allWordsPool.length)];
            options.add(randomDistractor);
        }
        
        // Shuffle options
        const shuffledOptions = Array.from(options).sort(() => Math.random() - 0.5);

        quizData.push({
            originalSentence: sentence.trim(),
            targetWord: targetWord,
            options: shuffledOptions,
            answered: false,
            isCorrect: false
        });
    });

    document.getElementById('setup-view').classList.add('hidden');
    document.getElementById('test-view').classList.remove('hidden');
    renderQuestions();
    updateFocus();
}

function renderQuestions() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';

    quizData.forEach((q, index) => {
        const block = document.createElement('div');
        block.className = 'sentence-block';
        block.id = `question-${index}`;

        // Replace target word with blank
        const displaySentence = q.originalSentence.replace(q.targetWord, '<span class="blank"></span>');
        
        let html = `<div id="sentence-text-${index}">${displaySentence}</div>`;
        
        html += `<div class="options" id="options-${index}">`;
        q.options.forEach((opt, i) => {
            html += `<div class="option" onclick="handleAnswer(${index}, '${opt}')">
                        <b>${i + 1}.</b> ${opt}
                     </div>`;
        });
        html += `</div>`;
        html += `<div id="feedback-${index}"></div>`;

        block.innerHTML = html;
        container.appendChild(block);
        
        if (index !== 0) block.classList.add('hidden'); // Hide future questions initially
    });
}

function handleAnswer(qIndex, selectedWord) {
    console.log(qIndex);
    console.log(selectedWord);
    if (quizData[qIndex].answered || qIndex !== currentQuestionIndex) return;
    
    const q = quizData[qIndex];
    console.log(q);
    q.answered = true;
    q.isCorrect = (selectedWord === q.targetWord[0]);
    if (q.isCorrect) score++;

    // Highlight options
    const optionsDiv = document.getElementById(`options-${qIndex}`);
    const optionElements = document.getElementById(`options-${qIndex}`).children;
    
    Array.from(optionElements).forEach(el => {
        const text = el.innerText.split(' '); // Extract word after "1. "
        if (text === q.targetWord) el.classList.add('correct-ans');
        else if (text === selectedWord && !q.isCorrect) el.classList.add('incorrect-ans');
        el.style.pointerEvents = 'none'; // disable clicks
    });

    // Feedback text
    const feedbackDiv = document.getElementById(`feedback-${qIndex}`);
    if (!q.isCorrect) {
        feedbackDiv.innerHTML = `<span class="result-text" style="color: #721c24;">Incorrect. The right word was: <b>${q.targetWord}</b>. Your answer was ${selectedWord}</span>`;
    } else {
        feedbackDiv.innerHTML = `<span class="result-text" style="color: #155724;">Correct!</span>`;
    }

    // Reconstruct sentence with Wiktionary links and TTS
    const sentenceDiv = document.getElementById(`sentence-text-${qIndex}`);
    let linkedSentence = q.originalSentence.replace(wordRegex, (match) => {
        return `<span class="word-link" onclick="fetchWiktionary('${match}')">${match}</span>`;
    });
    
    sentenceDiv.innerHTML = `<button class="tts-btn" onclick="speakText('${q.originalSentence.replace(/'/g, "\\'")}')">🔊</button>` + linkedSentence;

    // Move to next question
    document.getElementById(`question-${qIndex}`).classList.remove('active');
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        updateFocus();
    } else {
        showScore();
    }
}

function updateFocus() {
    if (currentQuestionIndex >= quizData.length) return;
    const nextQ = document.getElementById(`question-${currentQuestionIndex}`);
    nextQ.classList.remove('hidden');
    nextQ.classList.add('active');
    nextQ.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function showScore() {
    const scoreBoard = document.getElementById('score-board');
    scoreBoard.getElementsByTagName("p")[0].innerHTML = `Test Complete! Your Score: ${score} / ${quizData.length}`;
    scoreBoard.classList.remove('hidden');
}

function resetTest() {
    const scoreBoard = document.getElementById('score-board');
    scoreBoard.classList.add('hidden');
    startTest();
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (currentQuestionIndex >= quizData.length) return;
    const key = parseInt(e.key);
    if (key >= 1 && key <= 5) {
        const q = quizData[currentQuestionIndex];
        if (!q.answered) {
            handleAnswer(currentQuestionIndex, q.options[key - 1]);
        }
    }
});

// TTS using Web Speech API
function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'tr-TR';
    window.speechSynthesis.speak(utterance);
}

// Wiktionary API fetch
async function fetchWiktionary(word) {
    const sidebarContent = document.getElementById('dict-content');
    sidebarContent.innerHTML = `Searching for <b>${word}</b>...`;
    
    try {
        /* sidebarContent.innerHTML = `
            <iframe src="https://www.wiktionary.org/wiki/${encodeURIComponent(word.toLowerCase())}#Turkish" title="Embedded Page"></iframe>
        `;
       */
        sidebarContent.innerHTML = `
            <iframe src="https://translate.google.com/?sl=tr&tl=en&op=translate&text=${encodeURIComponent(word.toLowerCase())}" title="Embedded Page"></iframe>
        `;
    } catch (error) {
        sidebarContent.innerHTML = `<p>No definition found for <b>${word}</b>.</p>
        <a href="https://www.wiktionary.org/wiki/${encodeURIComponent(word.toLowerCase())}" target="_blank">Search manually on Wiktionary</a>`;
    }
}
