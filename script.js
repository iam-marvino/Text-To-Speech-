let playButton = document.getElementById('play-button');
let pauseButton = document.getElementById('pause-button');
let stopButton = document.getElementById('stop-button'); 
let textInput = document.getElementById('text-area');
let speedInput = document.getElementById('input-number'); 
let currentCharacter 


playButton.addEventListener('click', () => {
  playText(textInput.value);
})

pauseButton.addEventListener('click',pauseText)

stopButton.addEventListener('click',stopText)

speedInput.addEventListener('input', () => {
  stopText()
  playText(utterance.text.substring(currentCharacter))
  
})



function playText(text){
  if (speechSynthesis.pause && speechSynthesis.speaking) {
    return speechSynthesis.resume()
  } 
  if (speechSynthesis.speaking) return

  let utterance =  new SpeechSynthesisUtterance(text)
  utterance.rate = speedInput.value || 1 
  utterance.addEventListener('end', () => {
    textInput.disabled = false
  })
  utterance.addEventListener('boundary', e => {
    currentCharacter = e.charIndex
  })
  textInput.disabled = true
  speechSynthesis.speak(utterance)
}

function pauseText(){
  if (speechSynthesis.speaking) speechSynthesis.pause() 
  
}

function stopText(){
  speechSynthesis.resume()
  speechSynthesis.cancel()
}




// hello how are yo doing today