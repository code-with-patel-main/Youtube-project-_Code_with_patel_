const btn = document.getElementById("btn");
const results = document.getElementById("result");
const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.onstart = function () {
    console.log("you can speek now");
}

recognition.onresult = function (event) {
    var text = event.results[0][0].transcript;
    console.log(text);
    document.getElementById("result").innerHTML = text;
}

function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("result"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    alert("Copied the text:")
}