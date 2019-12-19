let arrayOfUsers = [];
let userData = {};


// window.onload = function() {
//   getUsers();
// }


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

const assert = require('assert')

function getUsers(fetch, id) {
  return fetch('https://randomuser.me/api/?results=100' + id)
    .then(response => response.json())
    .then(data => data.results[0])
}

describe('getUsers', () => {
  it('calls fetch with the correct url', () => {
    const fakeFetch = url => {
      assert(
        url ===
        'https://randomuser.me/api/?results=100'
      )
      return new Promise(function(resolve) {

      })
    }
    getUsers(fakeFetch, '')
  })

  it('identifies wrong api key', () => {
    const fakeFetch = url => {
      assert(
        url ===
        'https://randomuser.me/api/?results=100/123 + id'
      )
      return new Promise(function(resolve) {

      })
    }
    getUsers(fakeFetch, '')
  })

  // it('', (done) => {
  //   const fakeFetch = () => {
  //     return Promise.resolve({
  //       json: () => Promise.resolve({
  //         results: [
  //           { name: 'fluffykins' }
  //         ]
  //       })
  //     })
  //   }
  //   getAnimals(fakeFetch, 12345)
  //     .then(result => {
  //       assert(result.name === 'fluffykins')
  //       done()
  //     })
  // })
})