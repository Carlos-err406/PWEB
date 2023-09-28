$(document).ready(function () {
    $.getScript('utils.js', function () {
        hideNotifs()
        usernameInput.on('input', onUsernameInput)
        passwordInput.on('input', onPasswordInput)
        form.on('submit', onSubmit)
    })
})