import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [name, setName] = useState(""); // Name field (only for signup)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Email validation: must include @ and .com
    const isValidEmail = email.includes("@") && email.endsWith(".com");
    const isValidPassword = password.length >= 4;

    if (isValidEmail && isValidPassword) {
      // Navigate to Home Page
      navigate("/Pages/home");
    } else {
      setError(
        "Invalid email or password. Email must contain '@' and '.com', and password must be at least 4 characters."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6 text-pink-400 text-center">
          {isLogin ? "Login" : "Signup"}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field - Visible only in Signup */}
          {!isLogin && (
            <div>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-pink-500 text-white"
                required={!isLogin}
              />
            </div>
          )}
          {/* Email Field */}
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-pink-500 text-white"
              required
            />
          </div>
          {/* Password Field */}
          <div>
            <label className="block mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-pink-500 text-white"
              required
            />
          </div>
          {/* Error Message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-3 rounded font-bold hover:bg-pink-600 transition"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        {/* Toggle Between Login and Signup */}
        <p className="text-gray-400 text-sm text-center mt-4">
          {isLogin
            ? "Don't have an account? "
            : "Already have an account? "}
          <span
            className="text-pink-500 cursor-pointer hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Signup" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
