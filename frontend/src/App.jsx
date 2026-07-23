import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <h1>🐾 Império dos Animais</h1>
          <p>Sistema de Banho e Tosa</p>
        </div>
      </header>
      <main className="main-content">
        <div className="welcome-card">
          <h2>Bem-vindo!</h2>
          <p>Sistema centralizado de gerenciamento de banho e tosa para 4 lojas</p>
          <button className="btn-primary">Fazer Login</button>
        </div>
      </main>
    </div>
  );
}

export default App;