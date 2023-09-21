const onLoad = async () => {
    let r = await fetch("../../../data/specific_programs.json")
    let specific_programs = await r.json()
    r = await fetch("../../../data/groups.json")
    let groups = await r.json()
    let specific_program_selector = document.getElementById("request-select-specific-program-input")
    let group_selector = document.getElementById("request-select-group-input")
    specific_programs.forEach(element => {
        let option = document.createElement('option')
        option.value = element.id
        option.text = element.city + ": " + element.description
        specific_program_selector.appendChild(option)
    });
    groups.forEach(element => {
        let option = document.createElement('option')
        option.value = element.id
        option.text = element.country
        group_selector.appendChild(option)
    });
}

const onClose = (event) => {
    event.preventDefault()
    window.history.back()
}

const onSubmit = (event) => {
    event.preventDefault();
    let specific_program = document.getElementById("request-select-specific-program-input")
    let group = document.getElementById('request-select-group-input')
    let tourist_amount = document.getElementById('request-create-tourist-amount-input')
    let date = document.getElementById('request-create-date-input')
    
    console.log("Specific Program:", specific_program.value);
    console.log("Group:", group.value);
    console.log("Tourist amount:", tourist_amount.value);
    console.log("Date:", date.value);    
}
