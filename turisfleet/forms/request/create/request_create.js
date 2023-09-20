const onLoad = async () => {
    let r = await fetch("../../../data/specific_programs.json")
    let specific_programs = await r.json()
    r = await fetch("../../../data/groups.json")
    let groups = await r.json()
    let specific_program_selector = document.getElementById("specific-program-selector")
    let group_selector = document.getElementById("group-selector")
    specific_programs.forEach(element => {
        let option = document.createElement('option')
        option.value = element
        option.text = element
        specific_program_selector.appendChild(option)
    });
    groups.forEach(element => {
        let option = document.createElement('option')
        option.value = element
        option.text = element
        group_selector.appendChild(option)
    });
}

const onClose = (event) => {
    event.preventDefault()
    window.history.back()
}

const onSubmit = (event) => {
    event.preventDefault();
    let specific_program = document.getElementById("specific-program-selector")
    let group = document.getElementById('group-selector')
    let tourist_amount = document.getElementById('tourist-amount')
    let date = document.getElementById('date')
    
    console.log("Specific Program:", specific_program.value);
    console.log("Group:", group.value);
    console.log("Tourist amount:", tourist_amount.value);
    console.log("Date:", date.value);    
}
