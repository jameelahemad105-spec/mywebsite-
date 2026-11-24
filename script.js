const knowledgeQuestions = [
  { q: "Which city is Jameel from?", a: ["Turbat", "Karachi", "Lahore", "Quetta"], correct: 0 },
  { q: "Which province does he call home?", a: ["Sindh", "Balochistan", "Punjab", "Khyber Pakhtunkhwa"], correct: 1 },
  { q: "Which leadership role has Jameel held at college?", a: ["Sports captain", "Class monitor", "Head Boy", "Club treasurer"], correct: 2 },
  { q: "Which entry test has he been preparing for?", a: ["MDCAT", "USAT-E Pre-Engineering", "IELTS", "CSS"], correct: 1 },
  { q: "What kind of scholarship is he aiming for?", a: ["A fully funded international scholarship", "A short paid course", "A sports award", "A local driving course"], correct: 0 },
  { q: "Which school did he attend for matric?", a: ["Bahria Model College", "Makran Institute of Technology", "Government Boys High School Chasar", "A university in Karachi"], correct: 2 },
  { q: "Which career direction has he shown interest in?", a: ["Medicine", "Software Engineering", "Architecture", "Journalism"], correct: 1 },
  { q: "Which activity has Jameel said he has done many times?", a: ["Giving speeches", "Acting in films", "Painting portraits", "Playing in a band"], correct: 0 },
  { q: "What kind of responsibility has he taken on in student life?", a: ["Managing school activities and work", "Running a restaurant", "Coaching a national team", "Publishing a newspaper"], correct: 0 },
  { q: "One of his big motivations for the future is to…", a: ["Become famous at any cost", "Support his family and find opportunities abroad", "Avoid learning new things", "Never leave his hometown"], correct: 1 }
];

const careQuestions = [
  { q: "How much love and care do you feel for Jameel?", a: ["I love and care about him a lot 💗", "He is very special to me", "I genuinely wish him happiness", "I am still getting to know him"] },
  { q: "What do you appreciate most about him?", a: ["His confidence and courage", "His speeches and ideas", "His ambition and effort", "His friendship and kindness"] },
  { q: "What kind of memories should you make together?", a: ["More laughs and silly moments", "Long talks and honest conversations", "New adventures and experiences", "All of the above ✨"] },
  { q: "When life gets difficult, what would you want Jameel to remember?", a: ["He matters to people", "Someone is cheering him on", "He should keep believing in himself", "All of these ❤️"] },
  { q: "One last thing… leave Jameel a birthday message.", message: true }
];

const screens = ["welcome-screen", "quiz-screen", "bridge-screen", "care-screen", "final-screen"];
const state = { name: "", quizIndex: 0, quizAnswers: [], careIndex: 0, careAnswers: [], message: "" };
const byId = (id) => document.getElementById(id);

function showScreen(id) {
  screens.forEach((screenId) => {
    const element = byId(screenId);
    const active = screenId === id;
    element.hidden = !active;
    element.classList.toggle("active", active);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuiz() {
  const item = knowledgeQuestions[state.quizIndex];
  const chosen = state.quizAnswers[state.quizIndex];
  byId("quiz-count").textContent = "QUESTION " + (state.quizIndex + 1) + " OF 10";
  byId("quiz-percent").textContent = Math.round(((state.quizIndex + 1) / 10) * 100) + "%";
  byId("quiz-progress").style.width = ((state.quizIndex + 1) / 10) * 100 + "%";
  byId("quiz-question").textContent = item.q;
  byId("quiz-options").innerHTML = "";
  item.a.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option" + (chosen === index ? " selected" : "");
    button.setAttribute("aria-pressed", chosen === index ? "true" : "false");
    button.innerHTML = '<span class="option-mark">' + String.fromCharCode(65 + index) + '</span>' + answer;
    button.addEventListener("click", () => {
      state.quizAnswers[state.quizIndex] = index;
      renderQuiz();
    });
    byId("quiz-options").appendChild(button);
  });
  byId("quiz-hint").textContent = chosen === undefined ? "Choose one answer to continue." : "Answer selected. Ready for the next one?";
  byId("quiz-next").disabled = chosen === undefined;
  byId("quiz-next").textContent = state.quizIndex === 9 ? "See how I did you know me →" : "Next question →";
  byId("quiz-back").style.visibility = state.quizIndex === 0 ? "hidden" : "visible";
}

function quizScore() {
  return knowledgeQuestions.reduce((total, question, index) => total + (state.quizAnswers[index] === question.correct ? 1 : 0), 0);
}

function renderCare() {
  const item = careQuestions[state.careIndex];
  const chosen = state.careAnswers[state.careIndex];
  byId("care-count").textContent = "QUESTION " + (state.careIndex + 1) + " OF 5";
  byId("care-percent").textContent = Math.round(((state.careIndex + 1) / 5) * 100) + "%";
  byId("care-progress").style.width = ((state.careIndex + 1) / 5) * 100 + "%";
  byId("care-question").textContent = item.q;
  byId("care-options").innerHTML = "";
  byId("care-options").hidden = Boolean(item.message);
  byId("care-message-wrap").hidden = !item.message;
  if (item.message) {
    byId("birthday-message").value = state.message;
  } else {
    item.a.forEach((answer, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option" + (chosen === index ? " selected" : "");
      button.setAttribute("aria-pressed", chosen === index ? "true" : "false");
      button.innerHTML = '<span class="option-mark">' + String.fromCharCode(65 + index) + '</span>' + answer;
      button.addEventListener("click", () => {
        state.careAnswers[state.careIndex] = index;
        renderCare();
      });
      byId("care-options").appendChild(button);
    });
  }
  byId("care-hint").textContent = item.message ? "Your message is optional — finish whenever you're ready." : (chosen === undefined ? "Pick the answer that feels most like you." : "Lovely. Your answer has been noted on this page.");
  byId("care-next").disabled = !item.message && chosen === undefined;
  byId("care-next").textContent = state.careIndex === 4 ? "Finish the birthday surprise ✨" : "Next question →";
  byId("care-back").style.visibility = state.careIndex === 0 ? "hidden" : "visible";
}

// Birthday score collection. Add the Supabase project URL and anon key below after setup.
const BIRTHDAY_SUPABASE_URL = "YOUR_SUPABASE_PROJECT_URL";
const BIRTHDAY_SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY";

async function saveBirthdayScore() {
  const status = byId("save-score-status");
  if (!BIRTHDAY_SUPABASE_URL.startsWith("https://") || BIRTHDAY_SUPABASE_ANON_KEY.startsWith("YOUR_")) {
    if (status) status.textContent = "Your score is shown here. Online saving will be enabled after the birthday database is connected.";
    return;
  }
  if (status) status.textContent = "Saving your score…";
  try {
    const response = await fetch(BIRTHDAY_SUPABASE_URL + "/rest/v1/birthday_results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": BIRTHDAY_SUPABASE_ANON_KEY,
        "Authorization": "Bearer " + BIRTHDAY_SUPABASE_ANON_KEY,
        "Prefer": "return=minimal"
      },
      body: JSON.stringify({ visitor_name: state.name, score: quizScore() })
    });
    if (!response.ok) throw new Error("Score could not be saved");
    if (status) status.textContent = "Your score has been saved. Thank you for joining!";
  } catch (error) {
    if (status) status.textContent = "Your result is ready, but online saving is temporarily unavailable.";
  }
}

function finishExperience() {
  const score = quizScore();
  saveBirthdayScore();
  let level = "There are more stories for us to share.";
  if (score >= 8) level = "You know me really well — what a memory!";
  else if (score >= 5) level = "You know quite a bit about me!";
  else level = "We have plenty of stories left to discover!";
  byId("final-greeting").textContent = "You did it, " + state.name + "!";
  byId("final-score").textContent = score + "/10";
  byId("final-score-copy").textContent = level + " Thank you for taking this little birthday journey with me.";
  showScreen("final-screen");
  launchConfetti();
}

function launchConfetti() {
  const layer = byId("confetti");
  layer.innerHTML = "";
  const colors = ["#c77d91", "#dfb36f", "#94769c", "#e7a9a5", "#c8a6c3", "#f1d5b8"];
  for (let i = 0; i < 70; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = Math.random() * 1.2 + "s";
    piece.style.setProperty("--drift", (Math.random() * 180 - 90) + "px");
    piece.style.transform = "rotate(" + Math.random() * 180 + "deg)";
    layer.appendChild(piece);
  }
  window.setTimeout(() => { layer.innerHTML = ""; }, 5200);
}

function makeSummary() {
  const lines = [
    "JAMEEL'S BIRTHDAY — MY ANSWERS",
    "Visitor: " + state.name,
    "Knowledge score: " + quizScore() + "/10",
    "",
    "HOW WELL I KNOW JAMEEL"
  ];
  knowledgeQuestions.forEach((question, index) => {
    const answerIndex = state.quizAnswers[index];
    lines.push((index + 1) + ". " + question.q);
    lines.push("   My answer: " + (question.a[answerIndex] || "Not answered"));
    lines.push("   Correct answer: " + question.a[question.correct]);
  });
  lines.push("", "A LITTLE HEART CHECK");
  careQuestions.forEach((question, index) => {
    lines.push((index + 1) + ". " + question.q);
    if (question.message) lines.push("   My message: " + (state.message.trim() || "(No message added)"));
    else lines.push("   My answer: " + (question.a[state.careAnswers[index]] || "Not answered"));
  });
  lines.push("", "Made for Jameel Ahmad's birthday.");
  return lines.join("\n");
}

byId("welcome-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = byId("visitor-name").value.trim();
  if (!name) {
    byId("visitor-name").focus();
    return;
  }
  state.name = name;
  state.quizIndex = 0;
  showScreen("quiz-screen");
  renderQuiz();
});

byId("quiz-next").addEventListener("click", () => {
  if (state.quizAnswers[state.quizIndex] === undefined) return;
  if (state.quizIndex < knowledgeQuestions.length - 1) {
    state.quizIndex += 1;
    renderQuiz();
  } else {
    byId("bridge-score").textContent = quizScore() + "/10";
    showScreen("bridge-screen");
  }
});
byId("quiz-back").addEventListener("click", () => {
  if (state.quizIndex > 0) {
    state.quizIndex -= 1;
    renderQuiz();
  } else showScreen("welcome-screen");
});
byId("to-care").addEventListener("click", () => {
  state.careIndex = 0;
  showScreen("care-screen");
  renderCare();
});
byId("care-next").addEventListener("click", () => {
  const item = careQuestions[state.careIndex];
  if (!item.message && state.careAnswers[state.careIndex] === undefined) return;
  if (item.message) state.message = byId("birthday-message").value.trim();
  if (state.careIndex < careQuestions.length - 1) {
    state.careIndex += 1;
    renderCare();
  } else finishExperience();
});
byId("care-back").addEventListener("click", () => {
  if (state.careIndex > 0) {
    if (careQuestions[state.careIndex].message) state.message = byId("birthday-message").value;
    state.careIndex -= 1;
    renderCare();
  } else showScreen("bridge-screen");
});
byId("birthday-message").addEventListener("input", (event) => {
  state.message = event.target.value;
});
byId("copy-results").addEventListener("click", async () => {
  const status = byId("copy-status");
  try {
    await navigator.clipboard.writeText(makeSummary());
    status.textContent = "Copied! You can now share your answers with Jameel.";
  } catch (error) {
    status.textContent = "Copy is unavailable in this browser. You can take a screenshot of this result.";
  }
});
byId("restart").addEventListener("click", () => {
  state.name = "";
  state.quizIndex = 0;
  state.quizAnswers = [];
  state.careIndex = 0;
  state.careAnswers = [];
  state.message = "";
  byId("visitor-name").value = "";
  byId("birthday-message").value = "";
  byId("copy-status").textContent = "";
  showScreen("welcome-screen");
});