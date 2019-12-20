const assert = require('assert')

let userData = {};
// let arrayOfUsers = [];

// window.onload = function() {
//   getUsers();
// }

const getUsers = (fetch, id) => {
  return fetch('https://randomuser.me/api/?results=500/' + id)
    .then(res => res.json())
    .then(userData => userData.results[0])
}

const namePic = () => {
  // const title = document.getElementById('title')

  const allUsers = document.getElementById('all-users')

  // while(allPosts.firstChild) {
  //   allPosts.firstChild.remove()
  // }

  userData.results.map((user, index) => {
    console.log(user)
    const li = document.createElement('li')
    const pic = document.createElement('img')
    const button = document.createElement('button')
    button.innerHTML = 'More info'
    button.onclick = () => {
      moreInfo(user, li)
      button.onclick = null
    }
    pic.src = user.picture.medium
    const text = document.createTextNode(`#${index}, First Name: ${user.name.first}, Last Name: ${user.name.last} `)
    
    li.appendChild(button)
    li.appendChild(pic)
    li.appendChild(text)
    
    allUsers.append(li)
  })
}

const moreInfo = (user, li) => {
  const text = document.createTextNode(`DOB: ${user.dob.date}, email: ${user.email}`)
  li.appendChild(text)
}



describe('getUsers', function () {
  it ('calls fetch with correct url', () => {
    const fakeFetch = url => {
      assert(
        url ===
          'https://randomuser.me/api/?results=500/'
      )
      return new Promise(function(resolve) {

      })
    }
    getUsers(fakeFetch, '')
  })

  it ('calls fetch with wrong api key', () => {
    const fakeFetch = url => {
      assert(
        url ===
          'https://randomuser.me/api/?results=500/123'
      )
      return new Promise(function(resolve) {

      })
    }
    getUsers(fakeFetch, 123)
  })

  it('identifies gender', (done) => {
    const fakeFetch = url => {
      return Promise.resolve({
        json: () => Promise.resolve({
          results: [
            { gender: 'male'}
          ]
        })
      })
    }
    getUsers(fakeFetch, '')
      .then(result => {
        assert(result.gender === 'male')
        done()
      })
  })

  it('gets name', (done) => {
    const fakeFetch = url => {
      return Promise.resolve({
        json: () => Promise.resolve({
          results: [
            { name: 'Matt'}
          ]
        })
      })
    }
    getUsers(fakeFetch, 123)
      .then(result => {
        assert(result.name === 'Matt')
        done()
      })
  })

  it('gets email', (done) => {
    const fakeFetch = url => {
      return Promise.resolve({
        json: () => Promise.resolve({
          results: [
            { email: 'brad.gibson@example.com'}
          ]
        })
      })
    }
    getUsers(fakeFetch, 123)
      .then(result => {
        assert(result.email === 'brad.gibson@example.com')
        done()
      })
  })
})