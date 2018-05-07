import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  debugger
  // this.axios.get('/login/login', {
  //   params: {
  //     'username': data.username,
  //     'password': data.password
  //   }
  // }).then(function(response) {
  //   console.log(response)
  // })
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

