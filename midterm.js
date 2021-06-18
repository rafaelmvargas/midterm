// Create DIV element to place on page
var popOver = document.createElement('div')

// Add class to newly created DIV
div.classList.add('div-content')

// Get a targert and place inside
var target = document.querySelector('main')
target.append(div)

function clickHandler(event) {
  console.log(event.target)

  var eventTargetHash = event.target.hash
  if (eventTargetHash) {
    navRemoveActiveAll()

    console.log(eventTargetHash)
    div.innerHTML = eventTargetHash
  }

  if (event.target.matches('.sign-out-link')) {
    div.innerHTML = 'Singing out, please wait'
  }

  event.preventDefault()
}

function navRemoveActiveAll() {
  var tabs = document.querySelector('na ul li a')
  tabs.classList.remove('.active')
}

function div(message) {
  div.innerHTML = `${message}`
}

document.addEventListener('click', clickHandler, false)
