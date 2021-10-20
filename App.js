import { useState } from "react";
import "./App.css";
import { auth } from "./config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log("SuccessFully Signin");
    } catch (error) {
      console.log(error.message);
    }
  };

  const loginUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log("SuccessFully Login");
    } catch (error) {
      console.log(error.message);
    }
  };

  const singOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="App">
      <div>
        <h1>Register User</h1>
        <input
          onChange={(e) => setRegisterEmail(e.target.value)}
          type="text"
          placeholder="Enter User Email"
        />
        <input
          onChange={(e) => setRegisterPassword(e.target.value)}
          type="text"
          placeholder="Enter User Password"
        />
        <button onClick={registerUser}>Create User</button>
      </div>

      <br />
      <br />

      <hr />
      <div>
        <h1>Login User</h1>
        <input
          onChange={(e) => setLoginEmail(e.target.value)}
          type="text"
          placeholder="Email...."
        />
        <input
          onChange={(e) => setLoginPassword(e.target.value)}
          type="text"
          placeholder="Password....."
        />
        <button onClick={loginUser}>Login User</button>
      </div>

      <h2>{user?.email}</h2>
      <button onClick={singOut}>Signout</button>
    </div>
  );
}

export default App;
