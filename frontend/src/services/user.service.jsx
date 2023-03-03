export default {
    getMe(token) {
      return fetch(`${process.env.BASE_URL}/api/v1/users`, {
        method: "GET",
        headers: {
          "authorization":token
        }
      }).then(res => res.json())
    },
    UpdateUser(token, user) {
      return fetch(`${process.env.BASE_URL}/api/v1/users`, {
        method: "PUT",
        headers: {
          "Authorization": token,
          "Content-type":"Application/json"
        },
        body: JSON.stringify(user)
      }).then(res => res.json())
    }
  }