$.getScript('data.js')
const usernameError = $('#username-error');
const passwordError = $('#password-error');
const invalidCredentialsError = $('#invalid-credentials-error');
const loggedInNotif = $('#logged-in-notif');
const usernameInput = $('#username-input');
const passwordInput = $('#password-input');
const submitButton = $("#login-form > button[type=submit]");

const form = $('#login-form')

const hideNotifs = () => {
    usernameError.text('')
    passwordError.text('')
    invalidCredentialsError.text('')
    loggedInNotif.text('')
}

const setUsernameInputNormalState = () => {
    usernameInput.css('border-color', '#ced4da')
    usernameError.text("")
}
const setPasswordInputNormalState = () => {
    passwordInput.css('border-color', '#ced4da')
    passwordError.text("")

}

const setEmptyUsernameError = () => {
    usernameError.text("Error: can't be empty")
    usernameInput.css('border-color', 'red')
}

const setEmptyPasswordError = () => {
    passwordError.text("Error: can't be empty")
    passwordInput.css('border-color', 'red')
}

const resetFormStyle = () => {
    usernameInput.css('border-color', '#ced4da')
    passwordInput.css('border-color', '#ced4da')
    hideNotifs()
}

const login = (credentials) => {
    const logged = auth(credentials)
    if (!logged) {
        showInvalidCredentialsError()
    } else {
        onLoggedIn()
        // alert("Logged in successfully!")
    }
    return logged
}
const showInvalidCredentialsError = () => {
    invalidCredentialsError.text("Invalid credentials")
    usernameInput.css('border-color', 'red')
    passwordInput.css('border-color', 'red')
}

const hideInvalidCredentialsError = () => {
    invalidCredentialsError.text("")
    usernameInput.css('border-color', '#ced4da')
    passwordInput.css('border-color', '#ced4da')
}
const onUsernameInput = (ev) => {
    const value = usernameInput.val()
    value && (setUsernameInputNormalState() || hideInvalidCredentialsError())
}

const onPasswordInput = (ev) => {
    const value = passwordInput.val()
    value && (setPasswordInputNormalState() || hideInvalidCredentialsError())
}

const onLoggedIn = () => {
    usernameInput.css({ 'border-color': '#00B900', 'border-width': '3px' })
    passwordInput.css({ 'border-color': '#00B900', 'border-width': '3px' })
    submitButton.css({ 'background-color': '#00B900', 'border-color': '#00B900', 'pointer-events': 'none', 'opacity': '.5' })
    loggedInNotif.text("Successfully logged in")
    setTimeout(() => { clearLoggedInStyles(); resetFormStyle(); resetFormValues() }, 4000);

}

const clearLoggedInStyles = () => {
    hideNotifs()
    setPasswordInputNormalState()
    setUsernameInputNormalState()
    loggedInNotif.text("")
    submitButton.css({ 'background-color': '#0d6efd', "border-color": '#0d6efd', 'pointer-events': 'all', 'opacity': '1' })
}
    
const resetFormValues = () => {
    usernameInput.val('')
    passwordInput.val('')
}

const onSubmit = (ev) => {
    ev.preventDefault();
    resetFormStyle()
    const username = usernameInput.val();
    const password = passwordInput.val();
    if (!username || !password) {
        if (!username) {
            setEmptyUsernameError()
        }
        if (!password) {
            setEmptyPasswordError()
        }
    } else {
        login({ username, password })
    }
}