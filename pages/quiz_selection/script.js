let quizzes = document.querySelectorAll(".quiz");
let quizInfo = {
  title: document.getElementById("active-quiz-title"),
  theme: document.getElementById("active-quiz-theme"),
  description: document.getElementById("active-quiz-description"),
  questions: document.getElementById("active-quiz-question-amt")
};

for (let quiz of quizzes) {
  quiz.addEventListener("click", () => {
    if (!quiz.classList.contains("active-quiz")) {
      for (let quiz_ of quizzes) {
        if (quiz_.classList.contains("active-quiz")) {
          quiz_.classList.remove("active-quiz");
          break;
        }
      }
      quiz.classList.add("active-quiz");
    }
    quizInfo.title.innerHTML = weighted("Título: ") + quiz.querySelector(".quiz-title").innerText;
    quizInfo.theme.innerHTML = weighted("Tema: ") + quiz.querySelector(".quiz-theme").innerText;
    quizInfo.description.innerHTML = weighted("Descrição: ") + "[ PENDENTE ]";
    quizInfo.questions.innerHTML = weighted("Questões: ") + quiz.querySelector(".quiz-question-amt").innerText;
  });
}

function weighted(str, weight = 800) {
  return `<span style="font-weight: ${weight}">${str}</span>`;
}
