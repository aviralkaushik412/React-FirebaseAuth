import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, sendEmailVerification, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import GoogleAuth from './GoogleAuth';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [waitingForVerification, setWaitingForVerification] = useState(false);
  const [pollingInterval, setPollingInterval] = useState(null);

  const navigate = useNavigate();

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (!user) {
      // User logged out
      setWaitingForVerification(false);
      if (pollingInterval) clearInterval(pollingInterval);
      return;
    }

    if (user.emailVerified) {
      setWaitingForVerification(false);
      navigate('/');
    } else {
      // If not verified and login just happened, show waiting screen
      if (!waitingForVerification) {
        setWaitingForVerification(true);
      }
    }
  });

  return () => {
    unsubscribe();
    if (pollingInterval) clearInterval(pollingInterval);
  };
}, [navigate, waitingForVerification, pollingInterval]);
  const submithandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, pass);
      const user = userCred.user;

      if (!user.emailVerified) {
        await sendEmailVerification(user);
        alert('Email not verified. A verification email has been sent.');
        setWaitingForVerification(true);
        setLoading(false);

        const interval = setInterval(async () => {
          await user.reload();
          const refreshedUser = auth.currentUser;

          if (refreshedUser?.emailVerified) {
            clearInterval(interval);
            setPollingInterval(null);
            setWaitingForVerification(false);
            navigate('/');
          }
        }, 3000);

        setPollingInterval(interval);
      } else {
        setLoading(false);
        navigate('/');
      }
    } catch (err) {
      console.error('Login failed:', err.message);
      setLoading(false);
    }

    setMail('');
    setPass('');
  };

  if (waitingForVerification) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-amber-500 mb-4"></div>
        <p className="text-lg font-medium text-gray-800">
          Waiting for email verification...
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Please check your inbox or spam folder. This screen will automatically close once you're verified.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-lg text-black">
        <form onSubmit={submithandler} className="space-y-4">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>

          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setMail(e.target.value)}
            required
          />

          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-500 transition duration-300 text-white font-semibold py-2 rounded"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Submit'}
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/PasswordReset">
            <button className="text-sm text-blue-600 hover:underline mt-2">
              Forgot Password?
            </button>
          </Link>
          <Link to="/SignUp">
            <button className="mx-2 px-2 py-2 border-b-black border-1 text-sm text-black hover:underline mt-2">
              Create New Account
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-4">
        <GoogleAuth />
      </div>
    </>
  );
};

export default Signin;
