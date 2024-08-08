let ws;
let username;

function login() {
    username = document.getElementById('username').value;
    if (username) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('chat').style.display = 'flex';
        document.getElementById('userDisplayName').textContent = username;
        startChat();
    }
}

function startChat() {
    ws = new WebSocket('ws://localhost:8800');

    ws.onopen = () => {
        console.log('Connected to WebSocket server');
        
    };

    ws.onmessage = (event) => {
        const messages = document.getElementById('messages');
        const message = document.createElement('div');
        message.classList.add('message');
        if (event.data.startsWith(username)) {
            message.classList.add('myMessage');
        } else {
            message.classList.add('otherMessage');
        }
        message.textContent = event.data;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    };

    ws.onclose = () => {
        const messages = document.getElementById('messages');
        const message = document.createElement('div');
        message.classList.add('message', 'serverMessage');
        message.textContent = 'You have been disconnected';
        messages.appendChild(message);
    };
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = username + ': ' + input.value;
    ws.send(message);
    input.value = '';
}
