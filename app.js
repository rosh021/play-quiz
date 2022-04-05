const quizData = [
  {
    question: "The first computer bug was formed by faulty wires",
    a: "True",
    b: "False",
    c: "None of the Above",
    d: "Maybe",
    correct: "b",
  },

  {
    question: "Who was the 40th President of the USA?",
    a: "Jimmy Carter",
    b: "Bill Clinton",
    c: "Ronald Reagan",
    d: "Richard Nixon",
    correct: "c",
  },
  {
    question:
      "What year did the Boxing Day earthquake & tsunami occur in the Indian Ocean?",
    a: 2006,
    b: 2004,
    c: 2005,
    d: 2004,
    correct: "b",
  },
  {
    question: "What is not a wind instrument?",
    a: "Oboe",
    b: "Trombone",
    c: "Duduk",
    d: "Viola",
    correct: "d",
  },
];

let quizQuestion = 0;
let score = 0;

const quizElm = document.getElementById("quiz");

const questionElm = document.getElementById("question");

const answerElm = document.querySelectorAll(".answer");

const aElm = document.getElementById("a_text");
const bElm = document.getElementById("b_text");
const cElm = document.getElementById("c_text");
const dElm = document.getElementById("d_text");
const btnElm = document.getElementById("submit");

const loadQuiz = () => {
  deSelectRadio();
  const currentQuiz = quizData[quizQuestion];
  questionElm.innerText = currentQuiz.question;

  aElm.innerText = currentQuiz.a;
  bElm.innerText = currentQuiz.b;
  cElm.innerText = currentQuiz.c;
  dElm.innerText = currentQuiz.d;
};

const selectAnswer = () => {
  let answer = undefined;
  answerElm.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
};

const deSelectRadio = () => {
  //   let answerEl = undefined;
  answerElm.forEach((answerEl) => {
    answerEl.checked = false;
  });
};
loadQuiz();
btnElm.addEventListener("click", () => {
  const answer = selectAnswer();
  if (answer) {
    if (answer === quizData[quizQuestion].correct) {
      score++;
    }

    quizQuestion++;
    if (quizQuestion < quizData.length) {
      loadQuiz();
    } else {
      quizElm.innerHTML = `<h2>You have Answered correctly at ${score}/${quizData.length} questions.</h2>`;
    }
  }
});
