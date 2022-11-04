const login = async (email, password) => {
    const response = await fetch("http://localhost:4000/users/login", {
        method: "POST",
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify(email, password)
    })
    const data = await response.json()

}

export const getUsers = async() => {
    const response = await fetch("http://localhost:4000/users/")
    const data = await response.json()
}

export default login