import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/style.css';
import './styles/dark-mode.css';

function Main() {
  // Menggunakan state untuk menyimpan mode gelap atau terang
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark-mode';
  });

  // Menggunakan useEffect untuk mengubah tema saat isDarkMode berubah
  useEffect(() => {
    const theme = isDarkMode ? 'dark-mode' : 'light-mode';
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);

  // Fungsi untuk mengganti mode gelap atau terang
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Merender komponen App dengan properti toggleDarkMode dan isDarkMode
  return <App toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />;
}

// Mendapatkan elemen root dari DOM dan merender komponen Main
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Main />);