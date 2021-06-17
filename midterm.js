// Create DIV element to place on page
var betaInfo = document.createElement('div')

// Add class to newly created DIV
betaInfo.classList.add('beta-info')

// Get a targert and place inside
var target = document.querySelector('main')
target.append(betaInfo)

function clickHandler(event) {
  console.log(event.target)

  var eventTargetHash = event.target.hash
  if (eventTargetHash) {
    console.log(eventTargetHash)
    betaInfo.innerHTML = eventTargetHash
  }

  if (event.target.matches('.sign-out-link')) {
    betaInfo.innerHTML = 'Singing out, please wait'
  }

  event.preventDefault()
}

function popOver(message) {
  betaInfo.innerHTML = `${message}`
}

document.addEventListener('click', clickHandler, false)
