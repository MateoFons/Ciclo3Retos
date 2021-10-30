//------------------------------------ Funciones Category ------------------------------------//

function autoInicioCategory() {
    console.log("se esta ejecutando category")
    $.ajax({
        url: "http://144.22.225.106:8080/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaCategory(respuesta);
            let $select = $("#select-category");
            $.each(respuesta, function (id, name) {
                $select.append('<option value=' + name.id + '>' + name.name + '</option>');
                console.log("select " + name.id);
            });
        }
    })
}

function pintarRespuestaCategory(respuesta) {
    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "<td> <button onclick='actualizarInfoCategory(" + respuesta[i].id + ")'><i class='fas fa-sync'></i></button></td>";
        myTable += "<td> <button onclick='borrarInfoCategory(" + respuesta[i].id + ")'><i class='fas fa-times-circle'></i></button></td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado1").html(myTable);
}

function guardarInfoCategory() {
    let variable = {
        name: $("#Cname").val(),
        description: $("#Cdescription").val(),
    };
    $.ajax({
        url: "http://144.22.225.106:8080/api/Category/save",
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(variable),
        success: function (response) {
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("No se guardo correctamente");
            window.location.reload();
        }
    });
}

function actualizarInfoCategory(idElement) {
    let var2 = {
        id: idElement,
        name: $("#Cname").val(),
        description: $("#Cdescription").val()
    };
    let dataToSend = JSON.stringify(var2);
    $.ajax({
        url: "http://144.22.225.106:8080/api/Category/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (response) {
            $("#resultado").empty();
            $("#id").val("");
            $("#Cname").val("");
            $("#Cdescription").val("");
            autoInicioCategory();
            alert("Se ha actualizado correctamente")
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se actualizó correctamente");
        }
    });
}

function borrarInfoCategory(idElement) {
    let var2 = {
        id: idElement
    };
    let dataToSend = JSON.stringify(var2);
    $.ajax({
        url: "http://144.22.225.106:8080/api/Category/" + idElement,
        type: 'DELETE',
        data: dataToSend,
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        success: function (response) {
            $("#resultado").empty();
            autoInicioCategory();
            alert("Se ha eliminado correctamente")
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se eliminó el registro correctamente");
        }
    });
}

//------------------------------------ Funciones Ortopedic ------------------------------------//

function autoInicioOrtopedic() {
    console.log("se esta ejecutando ortopedic")
    $.ajax({
        url: "http://144.22.225.106:8080/api/Ortopedic/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaOrtopedic(respuesta);
            let $select = $("#select-ortopedic");
            let $select1 = $("#select-ortopedic1");
            $.each(respuesta, function (id, name) {
                $select.append('<option value=' + name.id + '>' + name.name + '</option>');
                $select1.append('<option value=' + name.id + '>' + name.name + '</option>');
                console.log("select " + name.id);
            });
        }
    })
}

function pintarRespuestaOrtopedic(respuesta) {
    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].brand + "</td>";
        myTable += "<td>" + respuesta[i].year + "</td>";
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "<td>" + respuesta[i].category.name + "</td>";
        myTable += "<td> <button onclick='actualizarInfoOrtopedic(" + respuesta[i].id + ")'><i class='fas fa-sync'></i></button></td>";
        myTable += "<td> <button onclick='borrarInfoOrtopedic(" + respuesta[i].id + ")'><i class='fas fa-times-circle'></i></button></td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado2").html(myTable);
}

function guardarInfoOrtopedic() {
    let var3 = {
        name: $("#Oname").val(),
        brand: $("#Obrand").val(),
        year: $("#Oyear").val(),
        description: $("#Odescription").val(),
        category: { id: +$("#select-category").val() }
    };
    $.ajax({
        url: "http://144.22.225.106:8080/api/Ortopedic/save",
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        success: function (response) {
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("No se guardo correctamente");
            window.location.reload()
        }
    });
}

function actualizarInfoOrtopedic(idElemento) {
    let myData = {
        id: idElemento,
        name: $("#Oname").val(),
        brand: $("#Obrand").val(),
        year: $("#Oyear").val(),
        description: $("#Odescription").val(),
        category: { id: +$("#select-category").val() }
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://144.22.225.106:8080/api/Ortopedic/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val("");
            $("#Oname").val("");
            $("#Obrand").val("");
            $("#Oyear").val("");
            $("#Odescription").val("");
            $("#select-category").val("");
            autoInicioOrtopedic();
            alert("Se ha actualizado correctamente")
        }
    });
}

function borrarInfoOrtopedic(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://144.22.225.106:8080/api/Ortopedic/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            autoInicioOrtopedic();
            alert("Se ha eliminado correctamente")
        }
    });
}

//------------------------------------ Funciones Client ------------------------------------//

function autoInicioClient() {
    console.log("se esta ejecutando client")
    $.ajax({
        url: "http://144.22.225.106:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaClient(respuesta);
            let $select = $("#select-client");
            let $select1 = $("#select-client1");
            $.each(respuesta, function (id, name) {
                $select.append('<option value=' + name.idClient + '>' + name.name + '</option>');
                $select1.append('<option value=' + name.idClient + '>' + name.name + '</option>');
                console.log("select " + name.idClient);
            });
        }
    })
}

function pintarRespuestaClient(respuesta) {
    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        myTable += "<td>" + respuesta[i].password + "</td>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].age + "</td>";
        myTable += "<td> <button onclick='actualizarInfoClient(" + respuesta[i].idClient + ")'><i class='fas fa-sync'></i></button></td>";
        myTable += "<td> <button onclick='borrarInfoClient(" + respuesta[i].idClient + ")'><i class='fas fa-times-circle'></i></button></td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado3").html(myTable);
}

function guardarInfoClient() {
    let data = {
        email: $("#Clemail").val(),
        password: $("#Clpassword").val(),
        name: $("#Clname").val(),
        age: $("#Clage").val(),
    };
    console.log(data);
    $.ajax({
        url: "http://144.22.225.106:8080/api/Client/save",
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(data),
        success: function (response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}

function actualizarInfoClient(idElemento) {
    let myData = {
        idClient: idElemento,
        email: $("#Clemail").val(),
        password: $("#Clpassword").val(),
        name: $("#Clname").val(),
        age: $("#Clage").val(),
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://144.22.225.106:8080/api/Client/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#idClient").val("");
            $("#Clemail").val("");
            $("#Clpassword").val("");
            $("#Clname").val("");
            $("#Clage").val("");
            autoInicioClient();
            alert("Se ha actualizado correctamente, recuerde que el email no es modificable")
        }
    });
}

function borrarInfoClient(idElemento) {
    let myData = {
        idClient: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://144.22.225.106:8080/api/Client/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            autoInicioClient();
            alert("Se ha eliminado correctamente")
        }
    });
}

//------------------------------------ Funciones Message ------------------------------------//

function autoInicioMessage() {
    console.log("se esta ejecutando message")
    $.ajax({
        url: "http://144.22.225.106:8080/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaMessage(respuesta);
            let $select = $("#select-message");
            $.each(respuesta, function (id, name) {
                $select.append('<option value=' + name.idMessage + '>' + name.name + '</option>');
                console.log("select " + name.idMessage);
            });
        }
    })
}

function pintarRespuestaMessage(respuesta) {
    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].messageText + "</td>";
        myTable += "<td>" + respuesta[i].client.name + "</td>";
        myTable += "<td>" + respuesta[i].ortopedic.name + "</td>";
        myTable += "<td> <button onclick='actualizarInfoMessage(" + respuesta[i].idMessage + ")'><i class='fas fa-sync'></i></button></td>";
        myTable += "<td> <button onclick='borrarInfoMessage(" + respuesta[i].idMessage + ")'><i class='fas fa-times-circle'></i></button></td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado4").html(myTable);
}

function guardarInfoMessage() {
    let data = {
        messageText: $("#MmessageText").val(),
        client: { idClient: +$("#select-client").val() },
        ortopedic: { id: +$("#select-ortopedic").val() }
    };
    console.log(data);
    let dataToSend = JSON.stringify(data);
    $.ajax({
        url: "http://144.22.225.106:8080/api/Message/save",
        type: 'POST',
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            alert("Se guardo correctamente");
            window.location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}

function actualizarInfoMessage(idElemento) {
    let myData = {
        idMessage: idElemento,
        messageText: $("#MmessageText").val(),
        client: { idClient: +$("#select-client").val() },
        ortopedic: { id: +$("#select-ortopedic").val() }
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://144.22.225.106:8080/api/Message/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#idMessage").val("");
            $("#MmessageText").val("");
            $("#select-client").val("");
            $("#select-ortopedic").val("");
            autoInicioMessage();
            alert("Se ha actualizado correctamente")
        }
    });
}

function borrarInfoMessage(idElemento) {
    let myData = {
        idMessage: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://144.22.225.106:8080/api/Message/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            autoInicioMessage();
            alert("Se ha eliminado correctamente")
        }
    });
}

//------------------------------------ Funciones Reservation ------------------------------------//

function autoInicioReservation() {
    console.log("se esta ejecutando Reservation")
    $.ajax({
        url: "http://144.22.225.106:8080/api/Reservation/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaReservation(respuesta);
            let $select = $("#select-reservation");
            $.each(respuesta, function (id, name) {
                $select.append('<option value=' + name.idReservation + '>' + name.startDate + '</option>');
                console.log("select " + name.idReservation);
            });
        }
    })
}

function pintarRespuestaReservation(respuesta) {
    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].startDate + "</td>";
        myTable += "<td>" + respuesta[i].devolutionDate + "</td>";
        myTable += "<td>" + respuesta[i].status + "</td>";
        myTable += "<td>" + respuesta[i].client.name + "</td>";
        myTable += "<td>" + respuesta[i].ortopedic.name + "</td>";
        myTable += "<td> <button onclick='actualizarInfoReservation(" + respuesta[i].idReservation + ")'><i class='fas fa-sync'></i></button></td>";
        myTable += "<td> <button onclick='borrarInfoReservation(" + respuesta[i].idReservation + ")'><i class='fas fa-times-circle'></i></button></td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado6").html(myTable);
}

function guardarInfoReservation() {
    let data = {
        startDate: $("#RstartDate").val(),
        devolutionDate: $("#RdevolutionDate").val(),
        client: { idClient: +$("#select-client1").val() },
        ortopedic: { id: +$("#select-ortopedic1").val() }
    };
    console.log(data);
    let dataToSend = JSON.stringify(data);
    $.ajax({
        url: "http://144.22.225.106:8080/api/Reservation/save",
        type: 'POST',
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (response) {
            console.log(response);
            alert("Se guardo correctamente");
            window.location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}

function actualizarInfoReservation(idElemento) {
    let myData = {
        idReservation: idElemento,
        startDate: $("#RstartDate").val(),
        devolutionDate: $("#RdevolutionDate").val(),
        client: { idClient: +$("#select-client1").val() },
        ortopedic: { id: +$("#select-ortopedic1").val() }
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://144.22.225.106:8080/api/Reservation/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#idReservation").val("");
            $("#RstartDate").val("");
            $("#RdevolutionDate").val("");
            $("#select-client1").val("");
            $("#select-ortopedic1").val("");
            autoInicioReservation();
            alert("Se ha actualizado correctamente")
        }
    });
}

function borrarInfoReservation(idElemento) {
    let myData = {
        idReservation: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://144.22.225.106:8080/api/Reservation/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            autoInicioReservation();
            alert("Se ha eliminado correctamente")
        }
    });
}

//------------------------------------ Funciones Score ------------------------------------//

function autoInicioScore() {
    console.log("se esta ejecutando Score")
    $.ajax({
        url: "http://144.22.225.106:8080/api/Score/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuestaScore(respuesta);
            let $select = $("#select-score");
            $.each(respuesta, function (id, name) {
                $select.append('<option value=' + name.idScore + '>' + name.stars + '</option>');
                console.log("select " + name.idScore);
            });
        }
    })
}

function pintarRespuestaScore(respuesta) {
    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].messageText + "</td>";
        myTable += "<td>" + respuesta[i].stars + "</td>";
        myTable += "<td>" + respuesta[i].reservation.name + "</td>";
        myTable += "<td> <button onclick='actualizarInfoScore(" + respuesta[i].idScore + ")'><i class='fas fa-sync'></i></button></td>";
        myTable += "<td> <button onclick='borrarInfoScore(" + respuesta[i].idScore + ")'><i class='fas fa-times-circle'></i></button></td>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado5").html(myTable);
}

function guardarInfoScore() {
    let data = {
        messageText: $("#SmessageText").val(),
        stars: $("#Sstars").val(),
        reservation: { idReservation: +$("#select-reservation").val() }
    };
    console.log(data);
    let dataToSend = JSON.stringify(data);
    $.ajax({
        url: "http://144.22.225.106:8080/api/Score/save",
        type: 'POST',
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (response) {
            console.log(response);
            alert("Se guardo correctamente");
            window.location.reload();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");
        }
    });
}

function actualizarInfoScore(idElemento) {
    let myData = {
        idScore: idElemento,
        messageText: $("#SmessageText").val(),
        stars: $("#Sstars").val(),
        reservation: { idReservation: +$("#select-reservation").val() }
    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://144.22.225.106:8080/api/Score/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#idScore").val("");
            $("#SmessageText").val("");
            $("#Sstars").val("");
            $("#select-reservation").val("");
            autoInicioScore();
            alert("Se ha actualizado correctamente")
        }
    });
}

function borrarInfoScore(idElemento) {
    let myData = {
        idScore: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://144.22.225.106:8080/api/Score/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            autoInicioScore();
            alert("Se ha eliminado correctamente")
        }
    });
}