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

Users //Rouets - post new user, put change user, delete user
   id
   name
   email
   phone_number


locations seed with locations
   id
   name
   address

books  seed with books  //Routes - put route for user_id
   isbn
   name
   author
   genre   
   Description
   user_id  //null if not checked out
   location_id


   User. hasmany(books)

   book. belongsto(user)

   book.hasOne(location)

   location.hasMany(books)