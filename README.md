# UnicornBooks

pages

home
  navbar
     login button
  show a selection of books

login
  form login
  form sign up

settings
  update user info
  delete account (if all books returned)

search all books
  form search by name, author, genre
  display search results
    show book info and checkout button

view your books
  display checked out books
    return book


Tables

Users
   id
   name
   email
   phone_number

Checkout
   user_id
   book_id

locations seed with locations
   id
   name
   address

books  seed with books
   isbn
   name
   author
   genre
   location_id