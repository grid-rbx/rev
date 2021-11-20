import rev from "https://raw.githubusercontent.com/grid-rbx/rev/master/index.js";

const codeArea = document.getElementById("code");
const code = rev.generateRandomWords();

codeArea.innerText = code;
