const login = async (email, password) => {
    const response = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify(email, password)
    })
    const data = await response.json()
    return data
}

export const getUsers = async() => {
    const response = await fetch("http://localhost:4000/users/")
    const data = await response.json()
}

export const registerUsers = async (email, password) => {
    const response = await fetch("http://localhost:4000/users/registration", {
        method: "POST",
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify(email, password)
    })
    const data = await response.json()
    console.log(data)
    return data
}

export const forgotPassword = async (email) => {
    const response = await fetch("http://localhost:4000/users/forgotPassword", {
        method: "POST",
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify(email)
    })

    const data = await response.json()
    return data

}

export const resetPassword = async ({id, password}) => {
    const response = await fetch("http://localhost:4000/users/reset", {
        method: "PUT",
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: id, password: password})
    })
    console.log()
    const data = await response.json()
    return data

}
export default login