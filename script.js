// Grab elements
let imgBox = document.getElementById('box')
let imgWrap = document.getElementById('wrap')
let origins = document.getElementById("origins")
let line = document.getElementById('line')

// Get the starting position of the container relative to the page
let leftSpace = imgBox.offsetLeft

// Match the "before" image size with the container width
origins.style.width = imgBox.offsetWidth + "px"

// Listen for mouse movement inside the box
imgBox.addEventListener('mousemove', (e) => {
  // Calculate how far the mouse is inside the box
  let boxWidth = e.pageX - leftSpace + "px"

  // Adjust overlay (before image) width
  imgWrap.style.width = boxWidth

  // Move the divider line along with the overlay
  line.style.left = boxWidth
})

