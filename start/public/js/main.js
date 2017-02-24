
var socket = io('http://localhost:3000');
socket.on('connect', function() {
    setTitle('Connected to Cyber Chat');
});

socket.on('disconnect', function() {
    setTitle('Disconncted');
});

socket.on('message', function(message) {
    printMessage(message);
});

document.forms[0].onsubmit = function () {
    var input = document.getElementById("message");
    printMessage(input.value);
    socket.emit('chat', input.vale);
    input.value = '';
};

function setTitle(title) {
    document.querySelector("h1").innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement("p");
    p.innerText = message;
    document.querySelector("div.messages").appendChild(p);
}
