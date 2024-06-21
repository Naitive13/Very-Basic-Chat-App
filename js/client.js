// no need to import the socket.io thing because I already linked it in the html
var io = io();

const form = document.querySelector("form");
const input = document.querySelector("input");
const chat = document.querySelector("#chat");
var first_connection = true;
var user_id;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    io.emit("chat message", input.value);
    input.value = "";
  }
});

io.on("your id", (id) => {
  user_id = id;
});

io.on("chat message", (data) => {
  const msg = data.msg;
  const sender_id = data.senderid;

  const new_message = document.createElement("li");
  new_message.textContent = msg;
  if (sender_id != user_id) {
    new_message.classList.add("other_message");
  }
  chat.appendChild(new_message);
  chat.scrollTo(0, chat.scrollHeight);
});
