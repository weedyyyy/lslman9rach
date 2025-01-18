document.addEventListener("DOMContentLoaded", () => {
    const questions = [
      {
        question: "Sous Android, chaque fragment possède un cycle de vie comme pour l'activité, quelles sont les méthodes callback, qui sont lancées avant la méthode onCreate()?",
        answers: ["onAttach()", "onCreateView()", "onStart()", "onResume()"],
        correctAnswers: ["onAttach()"],
      },
      {
        question: "Sous Android, quelles sont les vues graphiques qui héritent de la classe ViewGroup?",
        answers: ["Spinner", "ScrollView", "TextView", "Button"],
        correctAnswers: ["Spinner", "ScrollView"],
      },
      {
        question: "Depuis Android 6.0, lesquelles des permissions suivantes sont considérées comme dangereuses?",
        answers: ["CAMERA", "CALL_PHONE", "INTERNET", "WRITE_EXTERNAL_STORAGE"],
        correctAnswers: ["CAMERA", "CALL_PHONE"],
      },
      {
        question: "Quel est le type de données qui n'est pas supporté par le SGBD SQLite?",
        answers: ["VARCHAR", "REAL", "BLOB", "INTEGER"],
        correctAnswers: ["VARCHAR"],
      },
      {
        question: "Pour afficher et adapter une image dans une ImageView, il suffit d'utiliser l'attribut scaleType. Citez les options possibles pour cet attribut.",
        answers: ["center", "matrix", "fit center", "fitxy"],
        correctAnswers: ["center", "matrix", "fit center", "fitxy"],
      },
      {
        question: "Afin d'adapter une application Android aux différents types d'appareils, il suffit d'adapter ses vues à plusieurs configurations. Citez les types de ces configurations?",
        answers: ["taille", "densité", "langue", "version d’Android"],
        correctAnswers: ["taille", "densité", "langue", "version d’Android"],
      },
      {
        question: "Quel est le mécanisme qui permet de transférer des types complexes d'une activité à une autre?",
        answers: ["Sérialisation", "Parceling", "Intent", "Bundle"],
        correctAnswers: ["Sérialisation"],
      },
      {
        question: "Quelles sont les 2 façons qui permettent d'ajouter un fragment à une activité Android?",
        answers: ["par Java (dynamique)", "par XML (statique)", "par JSON", "par Intent"],
        correctAnswers: ["par Java (dynamique)", "par XML (statique)"],
      },
      {
        question: "Dans un adaptateur personnalisé, à quoi sert la méthode getView()?",
        answers: [
          "Get a View that displays the data at the specified position in the data set.",
          "To bind data to a View.",
          "To create a new View.",
          "To recycle a View.",
        ],
        correctAnswers: [
          "Get a View that displays the data at the specified position in the data set.",
        ],
      },
      {
        question: "Pour communiquer avec un serveur distant, l'application Android doit implémenter une tâche asynchrone (AsyncTask). De quels types sont les paramètres et le résultat de cette tâche asynchrone?",
        answers: ["String, Void, int", "int, String, Void", "Void, String, int", "int, Void, String"],
        correctAnswers: ["String, Void, int"],
      },
      {
        question: "À quoi sert la bibliothèque «gson-2.8.0.jar » dans le développement Android?",
        answers: [
          "Convertir des objets Java en JSON.",
          "Gérer les requêtes HTTP.",
          "Stocker des données locales.",
          "Créer des interfaces utilisateur.",
        ],
        correctAnswers: ["Convertir des objets Java en JSON."],
      },
      {
        question: "Comment peut-on interdire l'installation d'une application Android par les appareils qui ne possèdent pas un capteur donné nécessaire à son fonctionnement?",
        answers: [
          "En utilisant <uses-feature> dans le manifeste.",
          "En utilisant <uses-permission> dans le manifeste.",
          "En utilisant <uses-library> dans le manifeste.",
          "En utilisant <uses-sdk> dans le manifeste.",
        ],
        correctAnswers: ["En utilisant <uses-feature> dans le manifeste."],
      },
      {
        question: "Quelle est la différence entre un APK Debug et un APK Release?",
        answers: [
          "L'APK Debug contient des informations de débogage, tandis que l'APK Release est optimisé pour la publication.",
          "L'APK Debug est signé, tandis que l'APK Release ne l'est pas.",
          "L'APK Debug est plus petit que l'APK Release.",
          "L'APK Debug ne peut pas être installé sur un appareil.",
        ],
        correctAnswers: [
          "L'APK Debug contient des informations de débogage, tandis que l'APK Release est optimisé pour la publication.",
        ],
      },
      {
        question: "Citez les moyens permettant de rentabiliser le développement d'une application Android.",
        answers: [
          "Publicité et achats intégrés.",
          "Utilisation de bibliothèques open-source.",
          "Tests automatisés.",
          "achats intégrés.",
        ],
        correctAnswers: ["Publicité.","achats intégrés."],
      },
      {
        question: "Quelle est la plus récente version d'Android dans la liste suivante?",
        answers: ["Nougat", "Oreo", "Pie", "Android 10"],
        correctAnswers: ["Android 10"],
      },
      {
        question: "Quelles sont les vues graphiques qui héritent de View?",
        answers: ["FrameLayout", "Gallery", "RecyclerView", "DrawerLayout"],
        correctAnswers: ["FrameLayout", "Gallery", "RecyclerView", "DrawerLayout"],
      },
      {
        question: "Quels sont les sous-langages de SQL qui ne sont pas supportés sous SQLite?",
        answers: ["LCT", "LCD", "PL/SQL", "T-SQL"],
        correctAnswers: ["LCT", "LCD"],
      },
      {
        question: "Sous Android, l'API Mapsforge est:",
        answers: ["Offline", "Open-source", "Payante", "Cloud-based"],
        correctAnswers: ["Offline", "Open-source"],
      },
      {
        question: "Lors de la publication d'une application Android, la version qui permet de la tester par un groupe restreint de testeurs est appelée:",
        answers: ["Alpha", "Beta", "Release", "Stable"],
        correctAnswers: ["Beta"],
      },
      {
        question: "Google Analytics permet de:",
        answers: [
          "Obtenir des métriques.",
          "Analyser l'application.",
          "Mesurer le temps.",
          "Toutes les réponses ci-dessus.",
        ],
        correctAnswers: ["Toutes les réponses ci-dessus."],
      },
    ];
  
    let currentQuestionIndex = 0;
    let score = 0;
    let wrongAnswers = []; // Store questions the user got wrong
  
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const submitBtn = document.getElementById("submit-btn");
    const nextBtn = document.getElementById("next-btn");
    const resultContainer = document.getElementById("result-container");
    const correctAnswersDisplay = document.getElementById("correct-answers");
    const wrongAnswersDisplay = document.getElementById("wrong-answers");
    const questionNumberDisplay = document.getElementById("question-number");
  
    function loadQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;
      answersElement.innerHTML = "";
  
      currentQuestion.answers.forEach((answer, index) => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.id = `answer${index + 1}`;
        input.value = answer;
        li.appendChild(input);
        li.appendChild(document.createTextNode(answer));
        answersElement.appendChild(li);
      });
  
      // Update question number display
      questionNumberDisplay.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  
      // Reset UI for new question
      resultContainer.classList.add("hidden");
      submitBtn.disabled = false;
      nextBtn.classList.add("hidden");
    }
  
    function checkAnswers() {
      const currentQuestion = questions[currentQuestionIndex];
      const selectedAnswers = [];
      const answerInputs = document.querySelectorAll("#answers input:checked");
  
      answerInputs.forEach((input) => {
        selectedAnswers.push(input.value);
      });
  
      // Check if all correct answers are selected and no incorrect answers are selected
      const isCorrect =
        selectedAnswers.length === currentQuestion.correctAnswers.length &&
        selectedAnswers.every((answer) =>
          currentQuestion.correctAnswers.includes(answer)
        );
  
      if (isCorrect) {
        score++;
      } else {
        // Store the wrong question, user's answers, and correct answers
        wrongAnswers.push({
          question: currentQuestion.question,
          userAnswers: selectedAnswers,
          correctAnswers: currentQuestion.correctAnswers,
        });
      }
  
      // Display results
      resultContainer.classList.remove("hidden");
      correctAnswersDisplay.textContent = `Correct answers: ${currentQuestion.correctAnswers.join(", ")}`;
      wrongAnswersDisplay.textContent = `Your answers: ${selectedAnswers.join(", ")}`;
  
      // Disable submit button and show next button
      submitBtn.disabled = true;
      nextBtn.classList.remove("hidden");
    }
  
    function nextQuestion() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        // End of quiz
        questionElement.textContent = "Quiz over!";
        answersElement.innerHTML = "";
        submitBtn.classList.add("hidden");
        nextBtn.classList.add("hidden");
        correctAnswersDisplay.textContent = `Your final score is ${score}/${questions.length}.`;
  
        // Display wrong answers
        if (wrongAnswers.length > 0) {
          wrongAnswersDisplay.innerHTML = "<h3>Questions you got wrong:</h3>";
          wrongAnswers.forEach((wrongAnswer, index) => {
            wrongAnswersDisplay.innerHTML += `
              <p><strong>Question ${index + 1}:</strong> ${wrongAnswer.question}</p>
              <p><strong>Your answers:</strong> ${wrongAnswer.userAnswers.join(", ")}</p>
              <p><strong>Correct answers:</strong> ${wrongAnswer.correctAnswers.join(", ")}</p>
              <hr>
            `;
          });
        } else {
          wrongAnswersDisplay.textContent = "You got all questions correct!";
        }
      }
    }
  
    submitBtn.addEventListener("click", checkAnswers);
    nextBtn.addEventListener("click", nextQuestion);
  
    // Load the first question
    loadQuestion();
  });