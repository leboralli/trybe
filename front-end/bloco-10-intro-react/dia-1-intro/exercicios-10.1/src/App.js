import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['trabalhar ', 'estudar ', 'dormir '];
function App() {
  return (
    <div>
      <ul>{Task(10)}</ul>
      <p>{compromissos.map((array) => array)}</p>
    </div> 
  );
}

export default App;
