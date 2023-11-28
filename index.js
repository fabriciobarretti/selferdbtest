//Getting DOMs for clients and buttons and storing in a variable
let clientName = document.getElementById("client-name-input");
let clientAge = document.getElementById("age-input");
let clientPhone = document.getElementById("phone-input");
let clientCity = document.getElementById("city-input");
let clientCountry = document.getElementById("country-input");
let clientStatus = document.getElementById("status-input");

// let addButton = document.getElementById("add-btn");
let addButton = document.getElementById("submit-btn");
let showAllClientsButton = document.getElementById("show-all-clients-btn");

addButton.onclick = async function(){ 
    let client = {
        name: clientName.value,
        age: clientAge.value,
        phone: clientPhone.value,
        city: clientCity.value,
        country: clientCountry.value,
        status: clientStatus.checked
    }
    // window.location("/addclient"); // check if this address works
    console.log(client);
}

//  Use it later
// fetch('https://example.com/order', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(goodOrder),
//     })
//     .then((response) => response.json())
//     .then((goodOrder) => {
//         console.log('Success:', goodOrder);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });