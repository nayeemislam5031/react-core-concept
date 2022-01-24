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
       
        
      </header>
    </div>
  );
}

function Person(){
  return (
    <h1>Name: Sakib al Hasan</h1>
  );
}

export default App;
