//Getting DOMs for clients and buttons
let clientName = document.getElementById("client-name-input");
let clientAge = document.getElementById("age-input");
let clientPhone = document.getElementById("phone-input");
let clientCity = document.getElementById("city-input");
let clientCountry = document.getElementById("country-input");
let clientStatus = document.getElementById("status-input");

let addButton = document.getElementById("add-btn");
let showAllClientsButton = document.getElementById("show-all-clients-btn");

let client = {
    Name: clientName,
    Age: clientAge,
    Phone: clientPhone,
    City: clientCity,
    Country: clientCountry,
    Status: clientStatus
}

module.exports = client;