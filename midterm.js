// Create DIV element to place on page
var div = document.createElement('div')

// Add class to newly created DIV
div.classList.add('div-content')

// Get a targert and place inside
var target = document.querySelector('main')
target.append(div)

function clickHandler(event) {
  console.log(event.target)

  var eventTargetHash = event.target.hash
  if (eventTargetHash) {
    console.log(eventTargetHash)

    navRemoveActiveAll()
    navAddActive(event.target)

    div.innerHTML = eventTargetHash
  }

  if (event.target.matches('.sign-out-link')) {
    div.innerHTML = 'Singing out, please wait'
  }

  event.preventDefault()
}

function navRemoveActiveAll() {
  var activeTab = document.querySelector('.active')
  activeTab.classList.remove('active')
}

function navAddActive(tab) {
  tab.classList.add('active')
}

function div(message) {
  div.innerHTML = `${message}`
}

document.addEventListener('click', clickHandler, false)
