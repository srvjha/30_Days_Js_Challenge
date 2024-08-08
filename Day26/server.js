import {WebSocketServer,WebSocket} from 'ws';

const wss = new WebSocketServer({ port:8800 });

wss.on('connection',(ws)=>{
  //console.log(ws);
  console.log("Client Connected..");

  ws.on('message',(message)=>{
    console.log(`Received: ${message}`);
    wss.clients.forEach((client)=>{
        if(client.readyState === WebSocket.OPEN){
            client.send(message.toString())
        }
    })
  });

  ws.on('close',()=>{
    console.log("Client Disconnect..")
  })

});

console.log("Websocket server is running on ws://localhost:8800")
