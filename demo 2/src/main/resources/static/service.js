class Person{
    constructor(id, firstName, lastName){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
   }
}

function updateDisplay(response) {
    document.getElementById("output").innerText = JSON.stringify(response);
}

function create(event) {
    event.preventDefault();
    const id = document.getElementById("person-id").value;
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const person = new Person(id, firstName, lastName);
    const personData = JSON.stringify(person);

    $.ajax({
        type: "POST",
        crossDomain: true,
        headers:{
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/person-controller/create",
        data: personData,
        dataType: "JSON",
        success: function(response) {
            updateDisplay(response);
        },
        error: function(response) {
            updateDisplay(response);
        }
     });
}


function read(event) {
event.preventDefault();
const id = document.getElementById("person-id").value;

$.ajax({
    type: "GET",
    crossDomain: true,
    headers:{
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
    url: "/person-controller/read".concat(id),
    dataType: "JSON",
    success: function(response) {
        updateDisplay(response);
    },
    error: function(response) {
        updateDisplay(response);
    }
 });
}