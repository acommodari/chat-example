const socket = io();

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  socket.emit("chat message", document.getElementById("m").value);
  document.getElementById("m").value = "";
  return false;
});

socket.on("chat message", (msg) => {
  const li = document.createElement("li");

  li.appendChild(document.createTextNode(msg));

  document.getElementById("messages").appendChild(li);
});
