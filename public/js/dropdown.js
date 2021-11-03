const singleOption = document.querySelector('.autobiog')
const selectGenera = document.querySelector('#selectGenera')


function sortByGenera (event) {
  console.log(event.target.value)
  //const response = await fetch('/route....', {
    //method: 'POST',
    //body: JSON.stringify({genera: event.target.value})
    //headers: { 'Content-Type': 'application/json' },
  //})
//sends chosen value to home route that pulls correct data and renders page
}

selectGenera.addEventListener('change', sortByGenera)