import logo from './logo.svg';
import './App.css';

function App() {

  var style={
    color:'green',
    backgroundColor:'pink',
    borderRadius:'1rem',
    padding:'3px '

  }

  var person ={
    name: "Dr. Mahafurjur Rahaman",
    job: "Doctor"

  } 
  var person2 ={
    name:"Eva Rahaman",
    job:"Student"
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React person</p>
        <Person> </Person>
        <Person> </Person>
        <Person> </Person>
       
        
      </header>
    </div>
  );
}

function Person(){
  const personStyle ={
    border: '2px solid yellow', 
    margin:'10px'

  }
  return (
    <div style={personStyle}>
      <h1>Name: Sakib al  Hasan</h1>
      <h3>Profession: Cricater  </h3>
    </div>
  );
}

export default App;
