// no need to import the socket.io thing because I already linked it in the html
var socket = io();

const form = document.querySelector("form");
const input = document.querySelector("input");
const chat = document.querySelector("#chat");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

socket.on("chat message", (msg) => {
  const new_message = document.createElement("li");
  new_message.textContent = msg;
  chat.appendChild(new_message);
});
