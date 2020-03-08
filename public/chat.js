const socket = io.connect('http://localhost:3000');

const message = document.getElementById('message'),
  handle = document.getElementById('handle'),
  btn = document.getElementById('send'),
  output = document.getElementById('output'),
  typing = document.getElementById('typing');

btn.addEventListener('click', () => {
  socket.emit('chat', { message: message.value, handle: handle.value });
});

message.addEventListener('keypress', () => {
  socket.emit('typing', handle.value);
});

socket.on('chat', (data) => {
  typing.innerHTML = '';
  output.innerHTML += `<p><strong>${data.handle} : </strong> ${data.message} </p>`;
});

socket.on('typing', (data) => {
  typing.innerHTML = `<p>${data} is typing...</p>`;
});
