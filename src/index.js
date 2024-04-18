function clickButtonOne() {
  let text = "Für mehr Infos gehen sie bitte auf die Webseite des Tierheims​";
  alert(text);
}

function clickButtonTwo(input = null) {
  let text = "Balu\nIst ein verspielter Hund.\nUnd so weiter."
  alert(input ? input : text);
}
