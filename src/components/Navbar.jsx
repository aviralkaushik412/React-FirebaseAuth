import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // adjust path if needed
import { useAuth } from "../context/AuthContext"; // or wherever your context is

const Navbar = (e) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("./Signin");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <>
    <nav className="flex px-1 py-7 items-center justify-between bg-gray-700">
        <h1 className="text-2xl">hey {user?.displayName || "Guest"}</h1>
        <div className="flex gap-8 items-center">
          <Link to={'/'}> Home</Link>
          <Link to={'/About'}> About</Link>
          <Link to={'/Contact'}> Contact</Link>
          <Link to={'/Product'}> Product</Link>
        {user && (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
        </div>
    </nav>
    </>
  )
}

export default Navbar