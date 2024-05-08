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


   
  return (
    <div className="App">
      <h1>Your Shout-Out</h1>
      <div className='Display-Message'>
          {shoutOut.length > 0 && 
           shoutOut[0].message}
      </div>
      
      <form onSubmit={handleSubmit} 
      className='Display-Message'> 
      {/* have to change this in branch one and main */}

        <div className='Shout-Out'>
            <label htmlFor='your-message'>Shout-Out </label>
            <input id='your-message' 
                type='text' 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder='Shout Out'>
            </input>
        </div>

        <div className='info-container'>
            <label htmlFor='name'>Name </label>
            <input id='name' 
                type='text' 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder='Name'></input>
        </div>

        <div className='info-container'>
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
