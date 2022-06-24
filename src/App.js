import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './App.css';
import ContactList from './components/container/ContactList';
import TaskList from './components/container/TaskList';
import LoginFormik from './components/pure/forms/LoginFormik';
import RegisterFormik from './components/pure/forms/RegisterFormik';
function App() {
  return (
    <div className="App">
      {/* <LoginFormik/> */}
      <RegisterFormik/>
      
      {/* <ContactList/> */}

    </div>
  );
}

export default App;
