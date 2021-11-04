const selectgenre = document.querySelector('#selectgenre')
const selectLocation = document.querySelector('#selectLocation')
const checkbox = document.querySelector('#availableBox')


async function sortBygenre (event) {
  const genre = event.target.value
  console.log(genre)
  const response = await fetch(`/genre/${genre}`, {
    method: 'GET',
    //body: JSON.stringify({genre: event.target.value}),
    headers: { 'Content-Type': 'application/json' },
  })
  window.location.href = `/genre/${genre}`
}

async function sortByLocation (event) {
  const location = event.target.value
  const response = await fetch(`/location/${location}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  // const jsonRes = await response.json()
  window.location.href = `/location/${location}`

}

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