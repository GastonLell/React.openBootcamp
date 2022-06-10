import './App.css';
import ContactList from './components/container/ContactList';
import TaskList from './components/container/TaskList';

function App() {
  return (
    <div className="App">
      <TaskList/>
      <ContactList/>
    </div>
  );
}

export default App;
