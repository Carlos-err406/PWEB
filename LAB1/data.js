const database = [
    { username: "admin", password: "admin" },
    { username: "charlie", password: "password" }
]

const auth = ({ username: user, password: pass }) => {
    return database.find(({ username, password }) =>
        user === username && pass === password
    )
}