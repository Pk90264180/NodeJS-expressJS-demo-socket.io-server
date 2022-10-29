import { useState } from 'react';

import * as io from 'socket.io-client/dist/socket.io.js';
const socket = io.connect('https://backend-experimental01.herokuapp.com/');

function App() {
  const [id, setId] = useState('');
  const [status, setStatus] = useState('');
  socket.on('send_message', (arg) => {
    console.log(arg.id); // world
    setId(arg.id);
    setStatus(arg.status);
  });
  return (
    <>
      <div className="middle">
        <h1>Id: {id}</h1>
        <h2>Status: {status}</h2>
      </div>
    </>
  );
}

export default App;
