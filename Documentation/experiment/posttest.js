
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------
  const myQuestions = [
    {
      question: "For a substance in the two-phase region,",
      answers: {
        a: "both pressure and temperature are independent properties",
        b: "if pressure is given, the saturation temperature gets fixed",
        c: "no property other than temperature and pressure is required to be known",
        d: "all of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "For the measurement of quality, the state of the substance is brought from the two-phase region to",
      answers: {
        a: "single-phase region",
        b: "superheated region",
        c: "none of the above",
        d: "both a and b"
      },
      correctAnswer: "d"
    },
    {
      question: "Given that h2 = 2618.79 kJ/kg, h<sub>f</sub> = 908.79 kJ/kg, h<sub>fg</sub> = 1890.7 kJ/kg, find the quality of steam.",
      answers: {
        a: "1.2",
        b: "0.443",
        c: "0.904",
        d: "0.5"
      },
      correctAnswer: "c"
    },
    {
      question: "Given that h<sub>f</sub> = 874.87 kJ/kg, h<sub>g</sub> = 2794.8 kJ/kg, find the value of h<sub>fg</sub>.",
      answers: {
        a: "3669.67",
        b: "2000",
        c: "1919.93",
        d: "930.87"
      },
      correctAnswer: "c"
    },
    {
      question: "Throttling process is a/an __________ process.",
      answers: {
        a: "Reversible and isothermal",
        b: "Irreversible and constant enthalpy",
        c: "Reversible and constant entropy",
        d: "Reversible and constant enthalpy"
      },
      correctAnswer: "b"
    },
    {
      question: "Steam flows in a pipeline. At some point, it’s pressure is 0.1 Mpa and the temperature is found to be 120 °C. Find the specific enthalpy of steam at this point.",
      answers: {
        a: " 2716.6 kJ/kg",
        b: "844.89 kJ/kg",
        c: "1871.3 kJ/kg",
        d: "1947.3 kJ/kg"
      },
      correctAnswer: "a"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
