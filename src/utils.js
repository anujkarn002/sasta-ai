let intents = [
  {
    name: "greeting",
    words: ["hi", "hello", "hey", "hola", "namaste"],
    answer: "Hello, how can I help you?",
  },
  {
    name: "goodbye",
    words: ["bye", "goodbye", "see you later", "see you soon"],
    answer: "Goodbye, have a nice day!",
  },
  {
    name: "thanks",
    words: ["thanks", "thank you", "thank you very much"],
    answer: "You are welcome!",
  },
  {
    name: "age",
    words: ["how old are you", "what is your age"],
    answer: "I am 1 day old",
  },
  {
    name: "time",
    words: ["what time is it", "what is the time"],
    answer: "It is " + new Date().toLocaleTimeString(),
  },
  {
    name: "date",
    words: ["what is the date", "what is today's date"],
    answer: "It is " + new Date().toLocaleDateString(),
  },
  {
    name: "joke",
    words: ["tell me a joke", "make me laugh", "tell me something funny"],
    answer:
      "I am not funny, but I can tell you a joke. What do you call a cow with no legs? Ground beef.",
  },
  {
    name: "haalchal",
    words: ["how are you", "how are you doing"],
    answer: "I am fine, thank you. How are you?",
  },
];

const handleAiDimag = (message) => {
  let answer = "I don't understand you";
  for (let intent of intents) {
    for (let word of intent.words) {
      if (message.includes(word)) {
        answer = intent.answer;
        break;
      }
    }
  }
  return answer;
};

export { handleAiDimag };
