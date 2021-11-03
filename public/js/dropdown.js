const selectGenera = document.querySelector('#selectGenera')
const selectLocation = document.querySelector('#selectLocation')


function sortByGenera (event) {
  const genre = event.target.value
  const response = await fetch(`/genre/${genre}`, {
    method: 'POST',
    body: JSON.stringify({genera: event.target.value}),
    headers: { 'Content-Type': 'application/json' },
  })
  
}

function sortByLocation (event) {
  const location = event.target.value
  const response = await fetch(`/location/${location}`, {
    method: 'POST',
    body: JSON.stringify({genera: event.target.value}),
    headers: { 'Content-Type': 'application/json' },
  })
}

selectGenera.addEventListener('change', sortByGenera)
selectLocation.addEventListener('change', sortByLocation)