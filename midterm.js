// Create DIV element to place on page
var div = document.createElement('div')

// Add class to newly created DIV
div.classList.add('div-content')

// Get a targert and place inside
var target = document.querySelector('main')
target.append(div)

function menuClicked(event) {
  console.log(document.location.pathname)
  var tabSelected = (document.querySelector(
    'body'
  ).output = `<h1>You clicked: ${tabSelected} tab</h1>`)

  if (event.target.matches('.nav a')) {
    div.innerHTML = output
    //console.log(output)
  } else {
    return
  }
  event.preventDefault()
}

document.addEventListener('click', menuClicked)

// var tabSelected = window.location
// setup template literal

// TODO: Add event listener to the page using event delegation
// clicker.addEventListener('click', whatMenuWasSelected)

// TODO: fxn to filter clicks

// TODO: Remove active on all tabs

// TODO: Start everything!
