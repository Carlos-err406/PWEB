const populateDropdowns = () => {
    Promise.all([
        fetch("../../../data/drivers.json").then(r => r.json()),
        fetch("../../../data/situations.json").then(r => r.json()),
    ]).then(([drivers, situations]) => {
        const driversDropdown = document.getElementById("driver-situation-create-drivers-dropdown")
        const situationsDropdown = document.getElementById("driver-situation-create-situations-dropdown")
        drivers.forEach(({ id, name }) => {
            const option = document.createElement('option')
            option.value = id
            option.text = name
            driversDropdown.appendChild(option)
        });
        situations.forEach(({ id, situation }) => {
            const option = document.createElement('option')
            option.value = id
            option.text = situation
            situationsDropdown.appendChild(option)
        });
    })
}

const setInputDateValidations = () => {
    const initialDateInput = document.getElementById("driver-situation-create-date-input")
    const returnDateInput = document.getElementById("driver-situation-create-return-date-input")
    returnDateInput.disabled = true
    const now = new Date()
    const year = now.getFullYear()
    const rawMonth = now.getMonth() + 1
    const month = rawMonth < 10 ? '0' + rawMonth : rawMonth
    const day = now.getDate()
    const minDateString = `${year}-${month}-${day}`
    initialDateInput.min = minDateString
    returnDateInput.min = minDateString
}

const reactToInitialDateInput = () => {
    const returnDateInput = document.getElementById("driver-situation-create-return-date-input")
    const initialDateInput = document.getElementById("driver-situation-create-date-input")
    initialDateInput.addEventListener('input', () => {
        const initialDateValue = initialDateInput.value
        returnDateInput.disabled = !initialDateValue
        const { year, month, day } = extractDateFromString(initialDateValue)
        const minDateString = `${year}-${month}-${day}`
        returnDateInput.min = minDateString
        returnDateInput.oninvalid = () => { console.log("heloo") }
    })
}

const extractDateFromString = (dateString) => {
    const [year, month, day] = dateString.split("-")
    return { year, month, day }
}

const onLoad = () => {
    populateDropdowns()
    setInputDateValidations()
    reactToInitialDateInput()
}


const onClose = () => {
    window.history.back()
}


const onSubmit = (event) => {
    event.preventDefault();
    let driver = document.getElementById("driver-situation-create-drivers-dropdown").value
    let situation = document.getElementById("driver-situation-create-situations-dropdown").value
    let returnDate = document.getElementById('driver-situation-create-return-date-input').value
    let date = document.getElementById('driver-situation-create-date-input').value
    console.log("Driver", driver)
    console.log("Situation", situation)
    console.log("Date:", date);
    console.log("Return Date", returnDate)
}
