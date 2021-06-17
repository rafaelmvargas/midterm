// Create DIV element to place on page
var popOver = document.createElement('div')

// Add class to newly created DIV
popOver.classList.add('beta-info')

// Get a targert and place inside
var target = document.querySelector('main')
target.append(popOver)

function clickHandler(event) {
  console.log(event.target)

  var eventTargetHash = event.target.hash
  if (eventTargetHash) {
    console.log(eventTargetHash)
    popOver.innerHTML = eventTargetHash
  }

  if (event.target.matches('.sign-out-link')) {
    popOver.innerHTML = 'Singing out, please wait'
  }

  event.preventDefault()
}

function popOver(message) {
  popOver.innerHTML = `${message}`
}

document.addEventListener('click', clickHandler, false)
