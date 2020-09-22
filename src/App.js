import React, {useState} from 'react';
import './assets/css/App.css';
// Import components
import Filters from './components/Filters';
import TaskList from './components/TaskList';

function App() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Tasks management</h1>
      </header>
      <Filters setInputText={setInputText}/>
      <TaskList />
    </div>
  );
}

export default App;
