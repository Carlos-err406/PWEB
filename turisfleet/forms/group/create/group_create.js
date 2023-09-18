fetch("../../../data/countries.json").then(r => r.json()).then(countries => {
    const dropdown = document.getElementById("group-create-countries-dropdown")
    countries.forEach(({ value, label }) => {
        const option = document.createElement('option')
        option.value = value
        option.text = label
        dropdown.appendChild(option)
    });
})

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
    const touristAmmount = document.getElementById("group-create-trourist-ammount-input").value
    const country = document.getElementById("group-create-countries-dropdown").value
    console.log("country:", country)
    console.log("tourist amount:", touristAmmount)
}

