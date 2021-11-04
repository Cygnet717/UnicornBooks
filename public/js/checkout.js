const checkoutElement = document.querySelector('.checkoutButton').children
const user_id = document.querySelector('.checkoutButton').getAttribute('data-user_id')

async function checkoutBook(event){
  console.log(event.target.getAttribute('data-user_id'))
  if(event.target.hasAttribute('data-book_id')){
    const book_id = event.target.getAttribute('data-book_id')

    const response = await fetch(`/api/books/${book_id}`, {
      method: 'PUT',
      body: JSON.stringify({user_id: user_id}),
      headers: { 'Content-Type': 'application/json' },
    })
    if(response.ok){
      document.location.replace(`/`)
    }
  }
}

for(let i = 0; i<checkoutElement.length; i++){
  checkoutElement[i].addEventListener('click', checkoutBook)
}
