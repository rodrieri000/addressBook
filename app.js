let userData = {};
let arrayOfUsers = [];

window.onload = function() {
  getUsers();
}

const getUsers = () => {
  fetch('https://randomuser.me/api/?results=5000')
    .then(res => res.json())
    .then(users => userData = users)
}

const namePic = () => {
  // const title = document.getElementById('title')

  const allUsers = document.getElementById('all-users')

  // while(allPosts.firstChild) {
  //   allPosts.firstChild.remove()
  // }

  userData.results.map((users, index) => {
    console.log(users)
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, First Name: ${users.name.first}, Last Name:${users.name.last}`)
    li.appendChild(text)
    allUsers.append(li)
  })
}
