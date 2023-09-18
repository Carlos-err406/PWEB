
const onLogin = (event) => {
    event.preventDefault()
    const username = document.getElementById('login-username-input').value
    const password = document.getElementById('login-password-input').value
    console.log('username:', username)
    console.log('password:', '*'.repeat(password.length))
}