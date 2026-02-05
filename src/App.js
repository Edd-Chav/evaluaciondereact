import React from 'react';
import './App.css';

// 👇 1. IMPORTAS TU IMAGEN AQUÍ (Pon el nombre real de tu archivo)
import miFotoLocal from './yo.jpg';

function App() {
  return (
    <div className="main-container">
      <div className="content-box">
        
        {/* 👇 2. USAS LA VARIABLE IMPORTADA EN EL SRC */}
        <img src={miFotoLocal} alt="Avatar" className="avatar-img" />

        {/* Los textos del screenshot */}
        <h1 className="title">Evaluación parcial 1</h1>
        
        {/* Nota: Puse "Feranda" tal cual la imagen, pero si es "Fernanda" solo corrígelo aquí jiji */}
        <h2 className="subtitle">Alumno(a): Eduardo Chavez Guerrero</h2>

        {/* Los links */}
        <div className="links-container">
          <a 
            href="https://www.linkedin.com/in/eduardo-chavez-guerrero-0abb373a4/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="link-text"
          >
            LINKED IN DE MI PROFILE
          </a>

          <a 
            href="/documentacion.html" 
            className="link-text"
          >
            DOCUMENTACION PARCIAL 1
          </a>
        </div>

      </div>
    </div>
  );
} export default App;