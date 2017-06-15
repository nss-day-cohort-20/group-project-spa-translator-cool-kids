let speakBtn = document.getElementById('speak');

function speekNow(clickEvent) {
  //console.log(document.getElementById('output').innerHTML);
  var msg = new SpeechSynthesisUtterance(document.getElementById('output').innerHTML);
  window.speechSynthesis.speak(msg)
}

speakBtn.addEventListener("click", speekNow);