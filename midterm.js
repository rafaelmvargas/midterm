// Create DIV element to place on page
var div = document.createElement('div')

// Add class to newly created DIV
div.classList.add('div-content')

// Get a targert and place inside
var target = document.querySelector('main')
target.append(div)

function clickHandler(event) {
  let eventTargetHash = event.target.hash
  if (eventTargetHash) {
    console.log(eventTargetHash)
    div.innerHTML = eventTargetHash
  }

  console.log(event.target)

  if (event.target.matches('.sign-out-link')) {
    div.innerHTML = 'Singing out, please wait'
  }

  event.preventDefault()
}

document.addEventListener('click', clickHandler, false)
