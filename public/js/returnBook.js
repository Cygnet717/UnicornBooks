const returnElement = document.querySelector('.returnButton').children

//initiate return book
async function returnBook(event){
  let user_id = 0;
  if(event.target.hasAttribute('data-book_id')){
    user_id = event.target.getAttribute('data-user_id')
    const book_id = event.target.getAttribute('data-book_id')

    const response = await fetch(`/api/books/${book_id}`, {
      method: 'PUT',
      body: JSON.stringify({user_id: null}),
      headers: { 'Content-Type': 'application/json' },
    })
    if(response.ok){
      document.location.replace(`/dashboard/${user_id}`)
    }
  }
}

//add eventListeners
for(let i = 0; i<returnElement.length; i++){
  returnElement[i].addEventListener('click', returnBook)
}
