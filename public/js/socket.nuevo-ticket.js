//Comando para establecer la conexión
var socket = io();

var label = $("#lblNuevoTicket");

socket.on("connect", function () {
	console.log("Se ha conectado al servidor");
});

socket.on("disconnect", function () {
	console.log("Se ha desconectado el servidor");
});

//on 'estadoActual'
socket.on("estadoActual", function (server) {
	label.text(server.actual);
});

$("button").on("click", function () {
	socket.emit("siguienteTicket", null, function (siguienteTicket) {
		label.text(siguienteTicket);
	});
});
