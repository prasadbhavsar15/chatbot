const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null;
const inputInitHeight = chatInput.scrollHeight;

const outgoingMessage = (htmlContent) => {
  const liTag = document.createElement("li");
  liTag.classList.add("chat", `outgoing`);
  liTag.innerHTML = htmlContent;
  return liTag;
};

const incomingMessage = (content) => {
  const liTag = document.createElement("li");
  liTag.classList.add("chat", `incoming`);

  if (typeof content === "string") {
    liTag.innerHTML = `<span class="material-symbols-outlined">
      <img src="./college-icon.jpg" alt='college image' style="width:20px; height:20px; margin-top:-10px"/>
    </span>${content}`;
  } else if (content instanceof HTMLElement) {
    liTag.appendChild(content);
  }

  chatbox.appendChild(liTag);
  return liTag;
};

const generateResponse = (chatElement) => {
  return new Promise((resolve, reject) => {
    const messageElement = chatElement.querySelector("p");

    try {
      switch (userMessage.toLowerCase()) {
        case "hi":
          setTimeout(() => {
            messageElement.textContent = "Hello! How can I assist you today?";
            incomingMessage(
              questionHtml({
                questionOne: "what is your name",
                questionTwo: "who is the founder of college?",
                questionThree: "where the college is located?",
              })
            );

            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "what is your name":
          setTimeout(() => {
            messageElement.textContent = "My name is Chat Bot";
            incomingMessage(`<p>What is your full name</p>`);

            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "who is the founder of college?":
          setTimeout(() => {
            messageElement.textContent = "Dr. Baliram Hire ";
            incomingMessage(
              questionHtml({
                questionOne: "Give the details of college website",
                questionTwo: "Where the college is located?",
                questionThree: "Who is the principal of college?",
              })
            );
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "where the college is located?":
          setTimeout(() => {
            messageElement.textContent = "Malegaon Camp ,Malegaon Dist-Nasik";
            incomingMessage(
              questionHtml({
                questionOne: "Give the details of college website",
                questionTwo: "Where the college is located?",
                questionThree: "what is your name",
              })
            );
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "who is the principal of college?":
          setTimeout(() => {
            messageElement.textContent = "Mr. Tushar Sharma";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "give the details of college website":
          setTimeout(() => {
            messageElement.textContent = "click here";
            incomingMessage(
              "<p><a href='https://indiracollege.org/' target='_blank'>https://indiracollege.org/</a></p>"
            );

            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "who is the founder of college?":
          setTimeout(() => {
            messageElement.textContent = "Dr. Baliram Hire ";
            resolve(messageElement.textContent);
          }, 1000);
          break;
          ś;

        case "give the details of college contacts ":
          setTimeout(() => {
            messageElement.textContent = "Phone: 02554 251177";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "give the name and details of faculty of college ":
          setTimeout(() => {
            messageElement.textContent =
              "K.B.H.S.S. Trust's Indira College is Located in Malegaon, Nashik, Maharashtra.Established in 2008,It offers Various UnderGraduate (BCA) And PostGraduate(M.sc Programs.";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "what is the address of college? ":
          setTimeout(() => {
            messageElement.textContent =
              "Golibar Maidan, Dabhadi Rd, behind Church, Malegaon Camp, Soygaon,    Malegaon,  Maharashtra 423105       ";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "how much far away from mosam pool?":
          setTimeout(() => {
            messageElement.textContent =
              "10 min (3.2 km) via Camp Rd and Soygaon College Road";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "how much far away from ravalgaon naka?":
          setTimeout(() => {
            messageElement.textContent =
              "3 min (900.0 m) via MH SH 16/MH SH 8 and Dabhadi Rd";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "what is the college timing?":
          setTimeout(() => {
            messageElement.textContent = "10:45 AM To 03:15 PM";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "what is the list of document required for bca admission?":
          setTimeout(() => {
            messageElement.textContent =
              "1. 10th pass marksheet  , 2. 12th pass marksheet , 3. LC original Aadhar card Xerox";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "what is the list of document required for (mcs) or (msc-cs) admission?":
          setTimeout(() => {
            messageElement.textContent =
              "1. 10th pass marksheet , 2. 12th pass marksheet , 3. Batchelor degree marksheet , 4. LC original , 5. Aadhar card Xerox";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "what is duration for (bca) course?":
          setTimeout(() => {
            messageElement.textContent = "3 YEARS";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "what is duration for mcs or msc-cs course?":
          setTimeout(() => {
            messageElement.textContent = "2 YEARS";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "what are eligibility criteria for bca admission?":
          setTimeout(() => {
            messageElement.textContent =
              "Students must have passed Class 12 from any stream with English as a subject with a minimum of 45% to 55% marks in aggregate";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "is there any need of entrance examination for bca ?":
          setTimeout(() => {
            messageElement.textContent =
              "Candidates are offered admission based on their entrance test performance and their academic background. However, there are also colleges that offer BCA admission based on Class 12 scores. A few institutions may also conduct PI for selection.";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "is there any need of entrance examination for mcs or msc-cs?":
          setTimeout(() => {
            messageElement.textContent =
              "Yes, in Maharashtra, there are some universities and  colleges that conduct entrance exams for admission to MSc programs in computer science or electronics .";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "is there any scholarship facility for bca admission?":
          setTimeout(() => {
            messageElement.textContent =
              "Free admission for SC and ST category students For others as per university guidelines .";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "is there any scholarship facility for msc-cs or mcs admission?":
          setTimeout(() => {
            messageElement.textContent =
              "Free admission for SC and ST category students For others  as per university guidelines .";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "give me the fees structure for bca course":
          setTimeout(() => {
            messageElement.textContent =
              "Free admission for SC and ST category students For others  as per university guidelines .";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "give me the fees structure for mcs or msc-cs course.":
          setTimeout(() => {
            messageElement.textContent =
              "Free admission for SC and ST category students For others  as per university guidelines";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "which courses are available in college?":
          setTimeout(() => {
            messageElement.textContent =
              "1) Bachelor of Computer Application (BCA) 2) Master of Computer Science (M.Sc)";

            questionHtml({
              questionOne: "Give the details of college website",
              questionTwo: "give me the fees structure for bca course",
              questionThree: "is there any need of entrance examination for bca ?",
            })

            resolve(messageElement.textContent);
          }, 1000);
          break;


        // here start table format (FOR BCS)

        case "give the syllabus details of bca":
          setTimeout(() => {
            messageElement.textContent = "Here are the all Semester Subjects";
            incomingMessage(bcaFirstSemTable);
            incomingMessage(bcaSecondSemTable,);
            incomingMessage(bcaThirdSemTable,);
            incomingMessage(bcaFourthSemTable,);
            incomingMessage(bcaFifthSemTable,);
            incomingMessage(bcaSixthSemTable,);
            incomingMessage(
              questionHtml({
                questionOne: "Give the details of college website",
                questionTwo: "give me the fees structure for bca course",
                questionThree: "is there any need of entrance examination for bca ?",
              })
            );
            resolve(messageElement.textContent);
          }, 1000);
          break;

        // MCS SECTION
        case "give the syllabus details of mcs or msc-cs":
          setTimeout(() => {
            messageElement.textContent = "Here are the all Semester Subjects";
            incomingMessage(McaFirstSemTable);
            incomingMessage(McaSecondSemTable,);
            incomingMessage(McaThirdSemTable,);
            incomingMessage(McaFourthSemTable,);
            incomingMessage(McaElectiveSemTable,);
            incomingMessage(McaElective1SemTable,);
            incomingMessage(
              questionHtml({
                questionOne: "Give the details of college website",
                questionTwo: "give me the fees structure for bca course",
                questionThree: "is there any need of entrance examination for bca ?",
              })
            );
            resolve(messageElement.textContent);
          }, 1000);
          break;
        //  MCS COMPLETE

        // Chat End Messages

        case "ok":
          setTimeout(() => {
            messageElement.textContent = "Done";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        case "bye":
          setTimeout(() => {
            messageElement.textContent = "Good Bye";
            resolve(messageElement.textContent);
          }, 1000);
          break;

        default:
          messageElement.classList.add("error");
          messageElement.textContent =
            "Oops! I didn't understand your message. Please try again";
          reject(messageElement.textContent);
          break;
      }
    } catch (error) {
      messageElement.classList.add("error");
      messageElement.textContent =
        "Oops! Something went wrong. Please try again.";
      reject(messageElement.textContent);
    }
  });
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  chatbox.appendChild(outgoingMessage(`<p>${userMessage}</p>`));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    const incomingChatLi = incomingMessage(`<p>Thinking...</p>`);
    generateResponse(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    recognizeButton.style.removeProperty("display");
  }, 600);
};

chatInput.addEventListener("input", (event) => {
  if (event.target.value) {
    recognizeButton.style.display = "none";
  } else {
    recognizeButton.style.removeProperty("display");
  }

  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);

closeBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);

chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);

const capitalizeFirstLetter = (sentence) => {
  if (typeof sentence === "string" && sentence.length > 0) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  } else {
    return sentence;
  }
};

const handleQuestion = (event) => {
  const selectedRadioButton = document.querySelector(
    'input[name="question"]:checked'
  );

  if (selectedRadioButton) {
    userMessage = capitalizeFirstLetter(selectedRadioButton.value);
  }

  if (!userMessage) return;

  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  chatbox.appendChild(outgoingMessage(`<p>${userMessage}</p>`));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    const incomingChatLi = incomingMessage(`<p>Thinking...</p>`);
    generateResponse(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    recognizeButton.style.removeProperty("display");
    document.getElementById("questionForm").reset();
  }, 600);
};
