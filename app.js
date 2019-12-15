
let userData = {};
let arrayOfUsers = [];

window.onload = function() {
  getUsers();
}

const getUsers = () => {
  fetch('https://randomuser.me/api/?results=500')
    .then(res => res.json())
    .then(users => userData = users)
}

const namePic = () => {
  // const title = document.getElementById('title')

  const allUsers = document.getElementById('all-users')

  // while(allPosts.firstChild) {
  //   allPosts.firstChild.remove()
  // }

  userData.results.map((user, index) => {
    console.log(user)
    const li = document.createElement('li')
    const pic = document.createElement('img')
    const button = document.createElement('button')
    button.innerHTML = 'More info'
    button.onclick = () => {
      moreInfo(user, li)
      button.onclick = null
    }
    pic.src = user.picture.medium
    const text = document.createTextNode(`#${index}, First Name: ${user.name.first}, Last Name: ${user.name.last} `)
    
    li.appendChild(button)
    li.appendChild(pic)
    li.appendChild(text)
    
    allUsers.append(li)
  })
}

const moreInfo = (user, li) => {
  const text = document.createTextNode(`DOB: ${user.dob.date}, email: ${user.email}`)
  li.appendChild(text)
}