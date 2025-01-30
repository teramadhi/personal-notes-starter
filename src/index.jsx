// src/index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App' // Import komponen utama App

// Import stylesheet global
import './styles/style.css';

// Membuat root element untuk React DOM
const root = createRoot(document.getElementById('root'));

// Render aplikasi ke DOM dengan Strict Mode
root.render(
    <React.StrictMode>
        <App /> {/* Komponen utama aplikasi */}
    </React.StrictMode>
);