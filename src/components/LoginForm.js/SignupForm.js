import { useRef, useState } from "react";
import { signup, useAuth, logout, login } from "../../firebase";

const SignupForm = () => {
  const [isloading, setIsLoading] = useState(false);

  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignup = async () => {
    setIsLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error");
    }
    setIsLoading(false);
  };
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error");
    }
    setIsLoading(false);
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch {
      alert("Error");
    }
    setIsLoading(false);
  };

  return (
    <div>
      <div>Currently logged in as: {currentUser?.email}</div>
      <div>
        <input ref={emailRef} type="email" placeholder="email" />
        <input ref={passwordRef} type="password" placeholder="password" />
      </div>
      <button disabled={isloading || currentUser} onClick={handleSignup}>
        Sign Up
      </button>

      <button disabled={isloading || currentUser} onClick={handleLogin}>
        Log In
      </button>

      <button diasble={isloading || !currentUser} onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default SignupForm;
