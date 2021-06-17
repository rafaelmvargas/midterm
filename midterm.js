// Create DIV element to place on page
var div = document.createElement('div')

// Add class to newly created DIV
div.classList.add('div-content')

// Get a targert and place inside
var target = document.querySelector('main')
target.append(div)

// function menuClicked(event) {
//   console.log(document.location.pathname)
//   var tabSelected = (document.querySelector(
//     'body'
//   ).output = `<h1>You clicked: ${tabSelected} tab</h1>`)

//   if (event.target.matches('.nav a')) {
//     div.innerHTML = output
//     //console.log(output)
//   } else {
//     return
//   }
//   event.preventDefault()
// }

// document.addEventListener('click', menuClicked)

function clickHandler(event) {
  let eventTargetHash = event.target.hash
  if (eventTargetHash) {
    console.log(eventTargetHash)
    div.innerHTML = eventTargetHash
  }

  //   signOut = document.querySelector('[sign-out-link')
  console.log(event.target)

  if (event.target.matches('.sign-out-link')) {
    div.innerHTML = 'Singing out, please wait'
  }

  if (event.target.hash)
    //   if (event.target.matches('.nav ul li a')) div.innerHTML = `${event.target}`
    event.preventDefault()
}

document.addEventListener('click', clickHandler, false)

// var tabSelected = window.location
// setup template literal

// TODO: Add event listener to the page using event delegation
// clicker.addEventListener('click', whatMenuWasSelected)

// TODO: fxn to filter clicks

// TODO: Remove active on all tabs

// TODO: Start everything!
