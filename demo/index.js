import rev from "https://cdn.jsdelivr.net/gh/grid-rbx/rev/index.js";

const codeArea = document.getElementById("code");
const code = rev.generateRandomWords();

codeArea.innerText = code;
