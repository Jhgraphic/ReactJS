import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Loginformik from './components/pure/forms/loginFormik';
import Registerformik from './components/pure/forms/registerFormik';
import TaskListComponent from './components/container/task_list';
import HomePage from './pages/home/homePage';
import './App.css';

function App() {

  let logged = false;

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ HomePage } />
          <Route path='/login' component= { Loginformik }>
            {
              logged ? 
                () => {
                  alert('You are logged in. Redirecting to home...')
                  return (<Redirect to='/'/>)
                }
              :
              () => {
                return (<Loginformik></Loginformik>)
              }
            }
          </Route>
          <Route path='/register' component= { Registerformik }>
            {
              logged ? 
                () => {
                  alert('You are logged in. Redirecting to home...')
                  return (<Redirect to='/'/>)
                }
              :
              () => {
                return (<Registerformik></Registerformik>)
              }
            }
          </Route>
          <Route path='/tasks' component= { TaskListComponent }>
            {
              logged ? 
                () => {
                  return (<TaskListComponent></TaskListComponent>)
                }
              :
              () => {
                alert('You are not logged in. Redirecting to login...')
                  return (<Redirect to='/login'/>)
              }
            }
          </Route>
      </Switch>
    </Router>
  );
}

export default App;

