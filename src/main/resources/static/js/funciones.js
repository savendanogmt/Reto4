
//const BASE_URL = 'http://152.70.143.130:8080'
const BASE_URL = 'http://localhost:8080'
/*__________
Categoria
__________*/

function guardarInformacionCategory() {

    $("#resultadoCategory").empty();
    let myData = { name: $("#nameCategory").val(), description: $("#descripcionCategory").val(), }
    let dataToSend = JSON.stringify(myData);

    $.ajax({
        url: BASE_URL + '/api/Category/save',
        type: 'POST',
        data: dataToSend,
        datatype: "JSON",
        contentType: 'application/json',
        success: function (respuesta) {
            console.log(respuesta);
            alert("Inserción exitosa");
        },
        error: function (xhr, status) {
            alert('Operacion no satisfactoria,' + xhr.status);
        }
    }
    );
}

function traerInformacionCategory() {
    $.ajax({
        url: BASE_URL + '/api/Category/all',
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            pintarRespuestaCategory(respuesta);

        }
    }
    );
}

function pintarRespuestaCategory(items) {

    $("#resultadoCategory").empty();

    let myTable = "<table border=3>";
    myTable += "<tr><th>Id</th><th>Name</th><th>Description</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].description + "</td>";
        //myTable+="<td><button onclick='borrarCategory("+items[i].id+")'>Borrar</button>";
        //myTable+="<td><button onclick='actualizarCategory("+items[i].id+")'>Actualizar</button>";
        myTable += "</tr>";

    }
    myTable += "</table>";
    $("#resultadoCategory").append(myTable);
}

/*__________
Cliente
__________*/

function guardarInformacionClient() {

    $("#resultadoClient").empty();
    let myData = { email: $("#emailClient").val(), password: $("#passwordClient").val(), name: $("#nameClient").val(), age: $("#ageClient").val(), }
    let dataToSend = JSON.stringify(myData);

    $.ajax({
        url: BASE_URL + '/api/Client/save',
        type: 'POST',
        data: dataToSend,
        datatype: "JSON",
        contentType: 'application/json',
        success: function (respuesta) {
            console.log(respuesta);
            alert("Inserción exitosa");
        },
        error: function (xhr, status) {
            alert('Operacion no satisfactoria,' + xhr.status);
        }
    }
    );
}

function traerInformacionClient() {
    $.ajax({
        url: BASE_URL + '/api/Client/all',
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            pintarRespuestaClient(respuesta);

        }
    }
    );
}

function pintarRespuestaClient(items) {

    $("#resultadoClient").empty();

    let myTable = "<table border=3>";
    myTable += "<tr><th>Id</th><th>Email</th><th>Password</th><th>Name</th><th>Age</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].idClient + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].password + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        //myTable+="<td><button onclick='borrarClient("+items[i].id+")'>Borrar</button>";
        //myTable+="<td><button onclick='actualizarClient("+items[i].id+")'>Actualizar</button>";
        myTable += "</tr>";

    }
    myTable += "</table>";
    $("#resultadoClient").append(myTable);

}

/*__________
Motorbike
__________*/

function guardarInformacionMotorbike() {

    $("#resultadoMotorbike").empty();
    let myData = { brand: $("#brandMotorbike").val(), year: $("#year_bMotorbike").val(), description: $("#descriptionMotorbike").val(), name: $("#nameMotorbike").val() }
    let dataToSend = JSON.stringify(myData);

    $.ajax({
        url: BASE_URL + '/api/Motorbike/save',
        type: 'POST',
        data: dataToSend,
        datatype: "JSON",
        contentType: 'application/json',
        success: function (respuesta) {
            console.log(respuesta);
            alert("Inserción exitosa");
        },
        error: function (xhr, status) {
            alert('Operacion no satisfactoria,' + xhr.status);
        }
    }
    );
}

function traerInformacionMotorbike() {
    $.ajax({
        url: BASE_URL + '/api/Motorbike/all',
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            pintarRespuestaMotorbike(respuesta);

        }
    }
    );
}

function pintarRespuestaMotorbike(items) {

    $("#resultadoMotorbike").empty();

    let myTable = "<table border=3>";
    myTable += "<tr><th>Id</th><th>Brand</th><th>Year_b</th><th>Description</th><th>Name</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].brand + "</td>";
        myTable += "<td>" + items[i].year + "</td>";
        myTable += "<td>" + items[i].description + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        //myTable+="<td><button onclick='borrarMotorbike("+items[i].id+")'>Borrar</button>";
        //myTable+="<td><button onclick='actualizarMotorbike("+items[i].id+")'>Actualizar</button>";
        myTable += "</tr>";

    }
    myTable += "</table>";
    $("#resultadoMotorbike").append(myTable);

}

/*__________
Message
__________*/

function guardarInformacionMessage() {

    $("#resultadoMessage").empty();
    let myData = { messageText: $("#messageText").val(), }
    let dataToSend = JSON.stringify(myData);

    $.ajax({
        url: BASE_URL + '/api/Message/save',
        type: 'POST',
        data: dataToSend,
        datatype: "JSON",
        contentType: 'application/json',
        success: function (respuesta) {
            console.log(respuesta);
            alert("Inserción exitosa");
        },
        error: function (xhr, status) {
            alert('Operacion no satisfactoria,' + xhr.status);
        }
    }
    );
}

function traerInformacionMessage() {
    $.ajax({
        url: BASE_URL + '/api/Message/all',
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            pintarRespuestaMessage(respuesta);

        }
    }
    );
}

function pintarRespuestaMessage(items) {

    $("#resultadoMessage").empty();

    let myTable = "<table border=3>";
    myTable += "<tr><th>Id</th><th>Message</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].idMessage + "</td>";
        myTable += "<td>" + items[i].messageText + "</td>";

        //myTable+="<td><button onclick='borrarMessage("+items[i].id+")'>Borrar</button>";
        //myTable+="<td><button onclick='actualizarMessage("+items[i].id+")'>Actualizar</button>";
        myTable += "</tr>";

    }
    myTable += "</table>";
    $("#resultadoMessage").append(myTable);

}

/*__________
Reservation
__________*/

function guardarInformacionReservation() {

    $("#resultadoReservation").empty();
    let myData = { startDate: $("#startDate").val(), devolutionDate: $("#devolutionDate").val(), }
    let dataToSend = JSON.stringify(myData);

    $.ajax({
        url: BASE_URL + '/api/Reservation/save',
        type: 'POST',
        data: dataToSend,
        datatype: "JSON",
        contentType: 'application/json',
        success: function (respuesta) {
            console.log(respuesta);
            alert("Inserción exitosa");
        },
        error: function (xhr, status) {
            alert('Operacion no satisfactoria,' + xhr.status);
        }
    }
    );
}

function traerInformacionReservation() {
    $.ajax({
        url: BASE_URL + '/api/Reservation/all',
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            pintarRespuestaReservation(respuesta);

        }
    }
    );
}

function pintarRespuestaReservation(items) {

    $("#resultadoReservation").empty();

    let myTable = "<table border=3>";
    myTable += "<tr><th>Id</th><th>startDate</th><th>devolutionDate</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].idReservation + "</td>";
        myTable += "<td>" + items[i].startDate + "</td>";
        myTable += "<td>" + items[i].devolutionDate + "</td>";
        //myTable+="<td><button onclick='borrarReservation("+items[i].id+")'>Borrar</button>";
        //myTable+="<td><button onclick='actualizarReservation("+items[i].id+")'>Actualizar</button>";
        myTable += "</tr>";

    }
    myTable += "</table>";
    $("#resultadoReservation").append(myTable);

}

/*__________
Score
__________*/

function guardarInformacionScore() {

    $("#resultadoScore").empty();
    let myData = { stars: $("#stars").val(), messageText: $("#messageTextS").val(), }
    let dataToSend = JSON.stringify(myData);

    $.ajax({
        url: BASE_URL + '/api/Score/save',
        type: 'POST',
        data: dataToSend,
        datatype: "JSON",
        contentType: 'application/json',
        success: function (respuesta) {
            console.log(respuesta);
            alert("Inserción exitosa");
        },
        error: function (xhr, status) {
            alert('Operacion no satisfactoria,' + xhr.status);
        }
    }
    );
}

function traerInformacionScore() {
    $.ajax({
        url: BASE_URL + '/api/Score/all',
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            pintarRespuestaScore(respuesta);

        }
    }
    );
}

function pintarRespuestaScore(items) {

    $("#resultadoScore").empty();

    let myTable = "<table border=3>";
    myTable += "<tr><th>Id</th><th>Stars</th><th>Message</th></tr>";
    for (i = 0; i < items.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + items[i].idScore + "</td>";
        myTable += "<td>" + items[i].stars + "</td>";
        myTable += "<td>" + items[i].messageText + "</td>";
        //myTable+="<td><button onclick='borrarScore("+items[i].id+")'>Borrar</button>";
        //myTable+="<td><button onclick='actualizarScore("+items[i].id+")'>Actualizar</button>";
        myTable += "</tr>";

    }
    myTable += "</table>";
    $("#resultadoScore").append(myTable);

}