
const updateUserHandler = async (event) => {
  // event.preventDefault();
  const user_id = document.querySelector('#name-update').getAttribute('data-user_id');
  const username = document.querySelector('#name-update').value.trim();
  const email = document.querySelector('#email-update').value.trim();
 
  if (username && email) {
    console.log('here')
    const response = await fetch(`/api/users/${user_id}`, {
      method: 'PUT',
      body: JSON.stringify({ username, email }),
      headers: { 'Content-Type': 'application/json' },
    });
console.log(response)
    if (response.ok) {
      document.location.replace(`/dashboard/${user_id}`);
    } else {
      alert('Failed to update.');
    }
  }
}


const deleteUserHandler = async (event) => {
  event.preventDefault();
console.log(document.querySelector('#name-update').getAttribute('data-user_id'))
  console.log('deleteUser')
}


document
  .querySelector('#updateUser')
  .addEventListener('click', updateUserHandler);

  document
  .querySelector('#deleteUser')
  .addEventListener('click', deleteUserHandler);