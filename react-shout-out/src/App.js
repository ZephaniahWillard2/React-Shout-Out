import './App.css';
import React, {useState} from 'react';

function App() {

  const [shoutOut, setShoutOut] = useState([]);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newShoutOut = {
      message: message
    };

    setShoutOut([newShoutOut, ...shoutOut]);
    setMessage('');
    setName('');
    setDate('');

  };

  const styleObject = '';


  return (
    <div className="App">

      <div className='Display-Message'>
          <h1>Your Shout-Out</h1>
          {shoutOut.length > 0 && 
           shoutOut[0].message}
      </div>

      <form onSubmit={handleSubmit} className='Form'> 
        <div>
            <label htmlFor='your-message'>Shout-Out </label>
            <input id='your-message' 
                type='text' 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder='Shout Out'></input>
        </div>

        <div>
            <label htmlFor='name'>Name </label>
            <input id='name' 
                type='text' 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder='Name'></input>
        </div>

        <div>
            <label htmlFor='date'>Date </label>
            <input id='date' 
                type='date' 
                value={date} 
                onChange={(e) => setDate(e.target.value)}></input>
        </div>
          
        <button type='submit'>Submit</button>
      </form>

    </div>
  );
}

export default App;