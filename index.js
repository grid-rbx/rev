import fetch from "node-fetch"

function check(id) {
  if (!id) {
    return {
      "error": "No Discord ID provided."
    }
  }
  
  return fromRover(id)
}

function fromRover(id) {
  try {
    const response = fetch(`https://verify.eryn.io/api/user/${id}`).json()
    
    return {
      "id": id,
      "robloxId": response.robloxId,
      "username": response.username
    }
  } catch (error) {
    return error
  }
}

const user = check("862719183447130122")

setTimeout(() => {
  console.log(user)
}, 10000)

const rev = {
  check
}

export default check