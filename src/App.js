import './App.css';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginPage />}></Route>
        <Route exact path="/signup" element={<SignupPage />}></Route>
        <Route exact path="/forgotPassword" element={<ForgotPass />}></Route>
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

function ForgotPass() {
  return (
    <>
     <ForgotPassword/>
    </>
  );

}
