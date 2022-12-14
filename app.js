var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");
var btnTranslate = document.querySelector("#btn-translate");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
  console.log("Error Occured", error);
}

function clickHandler() {
  var inputText = txtInput.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
