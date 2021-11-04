const selectgenre = document.querySelector('#selectgenre')
const selectLocation = document.querySelector('#selectLocation')
const checkbox = document.querySelector('#availableBox')

//initate sort by genre
async function sortBygenre (event) {
  const genre = event.target.value
  const response = await fetch(`/genre/${genre}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  window.location.href = `/genre/${genre}`
}

//initate sort by location
async function sortByLocation (event) {
  const location = event.target.value
  const response = await fetch(`/location/${location}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  window.location.href = `/location/${location}`

}

//initate sort with checkbox
async function checkboxSort() {
  if(this.checked){
    const response = await fetch(`/checkbox`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
  
    window.location.href = `/checkbox`
  } else {
    window.location.href = `/`
  }
}

selectgenre.addEventListener('change', sortBygenre)
selectLocation.addEventListener('change', sortByLocation)
checkbox.addEventListener('change', checkboxSort)