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

  

  const appStyleObject = {
    textAlign: 'center',
    fontFamily: 'cambria',
    backgroundColor: 'rgb(117, 169, 143)',
    paddingBottom: '20px'
  };


  const headStyleObject = {
   
  };


  const messageStyleObject = {
    border: 'solid 2px black',
    borderRadius: '25px',
    width: '800px',
    height: '200px',
    margin: 'auto auto 30px auto',
    padding: '25px',
    fontSize: 'large',
    textAlign: 'left',
    backgroundColor: 'white',
    boxShadow: '2px 2px 3px black, -2px -2px 3px black'

  };


   
  return (
    <div className="App" style={appStyleObject}>
      <h1 style={headStyleObject}>Your Shout-Out</h1>
      <div className='Display-Message' style={messageStyleObject}>
          {shoutOut.length > 0 && 
           shoutOut[0].message}
      </div>
      
      <form onSubmit={handleSubmit} 
      className='Form' 
      style={messageStyleObject}> 

        <div>
            <label htmlFor='your-message'>Shout-Out </label>
            <input id='your-message' 
                type='text' 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder='Shout Out'>
            </input>
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
