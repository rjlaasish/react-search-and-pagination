import { Route } from 'react-router-dom';
import './App.css';
import AddUser from './components/UserUpdate/AddUser';
import EditUser from './components/UserUpdate/EditUser';
import Home from './pages/Home';

function App() {
  return (
    <div className="app">
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/adduser" component={AddUser}></Route>
    <Route exact path="/editUser/:id" component={EditUser}></Route>

    </div>
  );
}

export default App;
