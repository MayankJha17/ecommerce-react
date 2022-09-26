import './App.css';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginPage />}></Route>
        <Route exact path="/signup" element={<SignupPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

function LoginPage() {
  return (
    <>
      <Login />
    </>
  );
}

function SignupPage() {
  return (
    <>
      <Signup />
    </>
  );
}
