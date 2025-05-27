///login_content = ''';
//import { useState } from "react";
import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", email, password);
    // Aquí puedes llamar a Firebase auth si lo configuras
  };

  return (
    <div>
      <h2>Iniciar Sessió</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correu electrònic"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contrasenya"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}