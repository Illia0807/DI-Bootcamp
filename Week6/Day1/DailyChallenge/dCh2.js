const morse = `{
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
      }`;
let objJson = {};
function toJs() {
  return new Promise((resolve, reject) => {
    let objJson = JSON.parse(morse);
    if (Object.keys(objJson).length > 0) {
      resolve(objJson);
    } else {
      reject("Object is empty");
    }
  });
}

function toMorse(morseJS) {
  usetInfo = prompt("enter word a sentence here->").toLowerCase();
  let morseTranslation = [];
  return new Promise((resolve, reject) => {
    for (let char of usetInfo.toLowerCase()) {
      if (morseJS[char]) {
        morseTranslation.push(morseJS[char]);
      } else {
        return reject(`symbol "${char}" not find in Morse obj.`);
      }
    }
    resolve(morseTranslation);
  });
}

function joinWords(morseTranslation) {
  const result = morseTranslation.join("\n");
  document.body.innerHTML = `<pre>${result}</pre>`;
}

toJs()
  .then((morseJS) => toMorse(morseJS))
  .then(joinWords)
  .catch((error) => console.error("Ошибка:", error));
