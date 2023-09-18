let drivers = []
let license_categories = []
const onLoad = async () => {
    let r = await fetch("../../../data/drivers.json")
    drivers = await r.json()
    r = await fetch("../../../data/license_categories.json")
    license_categories = await r.json()
    let categoriesDropdown = document.getElementById("car-create-categories-dropdown")
    license_categories.forEach((name) => {
        const option = document.createElement('option')
        option.value = name
        option.text = name
        option.disabled = !drivers.some(({ license_categories }) => license_categories.includes(name))
        categoriesDropdown.appendChild(option)
    });
    filterDrivers()
}

const filterDrivers = () => {
    let selectedCategory = document.getElementById("car-create-categories-dropdown").value
    let driversDropdown = document.getElementById("car-create-drivers-dropdown")
    while (driversDropdown.hasChildNodes())
        driversDropdown.removeChild(driversDropdown.firstChild)
    drivers.forEach(({ name, license_categories }) => {
        if (license_categories.includes(selectedCategory)) {
            const option = document.createElement('option')
            option.value = name
            option.text = `[${license_categories}] ${name}`
            driversDropdown.appendChild(option)
        }
    });
}

const onClose = (event) => {
    event.preventDefault()
    const a = document.createElement('a')
    a.href = document.referrer
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

const onSubmit = (event) => {
    event.preventDefault()
    const plateNumber = document.getElementById("car-create-plate-number-input").value
    const brand = document.getElementById("car-create-brand-input").value
    const category = document.getElementById("car-create-categories-dropdown").value
    const seatAmount = document.getElementById("car-create-seat-amount-input").value
    const availableKm = document.getElementById("car-create-available-km-input").value
    const driver = document.getElementById("car-create-drivers-dropdown").value
    console.log("plate number:", plateNumber)
    console.log("brand:", brand)
    console.log("category:", category)
    console.log("seat amount:", seatAmount)
    console.log("available km:", availableKm)
    console.log("driver:", driver)
}
