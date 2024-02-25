const recognizeButton = document.getElementById("mic-btn");

let isSpeechRecognized = false;

if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();

  recognition.onstart = function () {
    chatInput.disabled = true;
    sendChatBtn.style.display = "none";
    recognizeButton.style.display = "none";
    chatInput.value = "We are listening...";
  };

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    if (transcript.length > 0) {
      chatInput.value = transcript;
      sendChatBtn.style.display = "";
      chatInput.disabled = false;
      isSpeechRecognized = true;
    } else {
      chatInput.value = `I can't hear your voice, please try again`;
    }
  };

  recognition.onerror = function (event) {
    if (event.error === "no-speech") {
      chatInput.value = "I can't hear your voice, please try again";
    } else {
      chatInput.value = "Speech recognition error. Please try again.";
    }
    sendChatBtn.style.display = "";
    recognizeButton.style.display = "";
    chatInput.disabled = false;
  };

  recognition.onend = function (event) {
    if (!isSpeechRecognized) {
      chatInput.value = "I couldn't recognize any speech. Please try again.";
    }

    isSpeechRecognized = false;
    recognizeButton.style.display = "";
    chatInput.disabled = false;
  };

  recognizeButton.addEventListener("click", () => {
    recognition.start();
  });
}
