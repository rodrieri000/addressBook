let arrayOfUsers = [];
let userData = {};


window.onload = function() {
  getUsers();
}


const getUsers = () => {
  fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(posts => userData = users)
}

const namePic = () => {

  const allUsers = document.getElementById('all-users')

  userData.results.map((users, index) => {
    console.log(users)
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, ${user.picture.medium}, First Name: ${users.name.first}, Last Name: ${users.name.last}`)
    li.appendChild(text)
    allUsers.append(li)
  })
}

const extraInfo = () => {

  const miscInfo = document.getElementById('info')

  userData.results.map((users, index) => {
    // console.log(users)
    const li = document.createElement('li')
    const text = document.createTextNode(`Phone Number: ${user.phone}, Email: ${user.email}, DOB: ${user.dob.date}, Street: ${user.location.street}, City: ${user.location.city}, State: ${user.location.state}`)
    li.appendChild(text)
    miscInfo.append(li)
  })
}
