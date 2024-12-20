import React, { useEffect, useState } from "react";
import Header from "../components/Header";

const ProfilePage = () => {
  const [theme, setTheme] = useState("dark"); // Default theme

  // Automatically detect system theme and add/remove class on body
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    setTheme(systemTheme);

    // Apply theme to body class
    document.body.classList.remove("light", "dark");
    document.body.classList.add(systemTheme);
  }, []);

  // Toggle theme and update body class
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      document.body.classList.remove("light", "dark");
      document.body.classList.add(newTheme);
      return newTheme;
    });
  };

  return (
    <div
      className={`min-h-screen flex flex-col `}
    >
      <Header />

      {/* Flex container for centering the box */}
      <div className="flex flex-grow justify-center items-center">
        {/* Profile Box */}
        <div
          className={`w-full max-w-md py-10 px-6 rounded-lg shadow-lg ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
          }`}
        >
          {/* Profile Image */}
          <div className="flex justify-center mb-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-pink-500"
            />
          </div>

          {/* Profile Details */}
          <h2 className="text-center text-2xl font-bold mb-2">John Doe</h2>
          <p className="text-center text-gray-400 mb-4">johndoe@example.com</p>

          {/* Details */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold">Full Name:</span>
              <span>John Doe</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Phone:</span>
              <span>+1 234 567 890</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Address:</span>
              <span>123 Main St, City, Country</span>
            </div>
          </div>

          {/* Toggle Theme Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded bg-pink-500 text-white hover:bg-pink-600 transition"
            >
              Toggle Theme
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
