let form = document.getElementById('form');

const submitForm = (event) => {
    event.preventDefault();

    let inputName = document.querySelector('input[name="fname"]');
    let inputLastName = document.querySelector('input[name = "lname"]');

    console.log(inputName.value);
    console.log(inputLastName.value);
}

form.addEventListener('submit', submitForm);