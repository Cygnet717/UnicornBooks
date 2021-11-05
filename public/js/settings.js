//initate update user
const updateUserHandler = async () => {
  const user_id = document.querySelector('#name-update').getAttribute('data-user_id');
  const username = document.querySelector('#name-update').value.trim();
  const email = document.querySelector('#email-update').value.trim();
 
  if (username && email) {
    const response = await fetch(`/api/users/${user_id}`, {
      method: 'PUT',
      body: JSON.stringify({ username, email }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace(`/dashboard/${user_id}`);
    } else {
      alert('Failed to update.');
    }
  }
}

//initate delete user
const deleteUserHandler = async () => {
 const user_id = document.querySelector('#name-update').getAttribute('data-user_id')
  
 const response = await fetch(`/api/users/${user_id}`, {
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
});
if (response.ok) {
  document.location.replace(`/`);
} else {
  alert('Failed to update.');
}
}

document
  .querySelector('#updateUser')
  .addEventListener('click', updateUserHandler);

  document
  .querySelector('#deleteUser')
  .addEventListener('click', deleteUserHandler);