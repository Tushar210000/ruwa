// import React, { createContext, useState, useEffect, useContext } from 'react';

// // Create Context
// const AuthContext = createContext();

// // Provider component
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // Load user from localStorage
//   useEffect(() => {
//     const storedUser = localStorage.getItem('ruwaUser');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   // Login
//   const login = (userData) => {
//     localStorage.setItem('ruwaUser', JSON.stringify(userData));
//     setUser(userData);
//   };

//   // Logout
//   const logout = () => {
//     localStorage.removeItem('ruwaUser');
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // useAuth Hook
// export const useAuth = () => useContext(AuthContext);
// import { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = (userData) => setUser(userData);
//   const logout = () => setUser(null);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Function to get the user profile
  

  // Function to handle login
  const login = async (phone, password) => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', {
        phone,
        password,
      });

      const { token } = response.data;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Fetch the user profile immediately after successful login
      await getProfile(token);
      
      alert('Login Successful!');
      return { success: true, user: user };
    } catch (error) {
      console.error('Login failed:', error);
      return {
        success: false,
        error: error.response?.data?.message || 'Login failed',
      };
    }
  };

  // Function to handle logout
  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
    navigate('/');
  };
const getProfile = async (token) => {
    try {
      const response = await axios.get('http://localhost:8000/api/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Use the profile data from the API, but fallback to a default image
      const profileData = {
        ...response.data.user,
        profilePic: response.data.user.profilePic || 'https://randomuser.me/api/portraits/men/75.jpg',
      };
      setUser(profileData);
      

    } catch (error) {
      console.error('ok Failed to fetch user profile:', error);
      logout(); // Log out if the profile fetch fails
    }
  };
  // Check for a token on initial load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      getProfile(token); // Fetch profile on app load
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

