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
        url: "/person-controller/read/".concat(id),
        dataType: "JSON",
        success: function(response) {
            updateDisplay(response);
        },
        error: function(response) {
            updateDisplay(response);
        }
     });
}

function readAll(event) {
    event.preventDefault();

    $.ajax({
        type: "GET",
        crossDomain: true,
        headers:{
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/person-controller/read-all",
        dataType: "JSON",
        success: function(response) {
            updateDisplay(response);
        },
        error: function(response) {
            updateDisplay(response);
        }
     });
}


function update(event) {
    event.preventDefault();
    const id = document.getElementById("person-id").value;
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const person = new Person(id, firstName, lastName);
    const personData = JSON.stringify(person);

    $.ajax({
        type: "PUT",
        crossDomain: true,
        headers:{
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/person-controller/update/".concat(id),
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

function destroy(event) {
    event.preventDefault();
    const id = document.getElementById("person-id").value;

    $.ajax({
        type: "DELETE",
        crossDomain: true,
        headers:{
            'Accept' : 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        url: "/person-controller/delete/".concat(id),
        dataType: "JSON",
        success: function(response) {
            updateDisplay(response);
        },
        error: function(response) {
            updateDisplay(response);
        }
     });
}