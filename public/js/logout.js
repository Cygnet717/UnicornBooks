const logoutClick = async function() {
 
  const response = await fetch('/api/users/logout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  })
  .then(console.log('ok'))
  .catch(console.log('error'))

  if (response.ok) {
    document.location.replace('/');
  } 
};


document.querySelector('#inout').addEventListner('click', logoutClick)